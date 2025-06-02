import re
import ipaddress
from urllib.parse import urlparse
import tldextract
import pandas as pd
import joblib

class ShellCommandAnalyzer:
    """
    Analyzer for shell commands: extracts URLs, computes URL features,
    applies YARA-style rules (R1–R8), and maps to behaviors (M1–M4).
    """

    # YARA rule patterns (R1–R8)
    _YARA_PATTERNS = {
        "R1": r"/bin/(?:bash|sh)\b",
        "R2": r"\b(?:scp|cat|binary|chmod)\b",
        "R3": r"\b(?:whoami|hostname|pwd)\b",
        "R4": r"\b(?:wget|curl|nc|nslookup)\b",
        "R5": r"\b(?:base64|b64)\b",
        "R6": r"(?:/etc/rc\b|/etc/passwd\b|/\.profile\b)",
        "R7": r"\b[^\s]+\.exe\b",
        "R8": r"\b[^\s]+(?:\.sh|\.exec)\b",
    }

    # Behavior mapping: sequences of rule IDs -> M1–M4
    _BEHAVIOR_SEQUENCES = {
        "M1_sensitive_info_theft": [("R4", "R3"), ("R4", "R6")],
        "M2_sensitive_file_op": [("R2", "R6"), ("R5", "R1")],
        "M3_malicious_software_import": [("R4", "R8"), ("R7",)],
        "M4_reverse_shell": [("R4", "R1")],
    }

    URL_REGEX = re.compile(r'(?:https?|ftp)://[^\s/$.?#].[^\s]*', re.IGNORECASE)

    def __init__(self,
                 allowlist_path: str = None,
                 url_model_path: str = None,
                 case_insensitive: bool = True):
        """
        :param allowlist_path: path to CSV of allowed domains (Alexa Top 1M format)
        :param suspicious_tlds: set of TLD strings (no leading dot)
        :param suspicious_domains: set of domains to flag
        :param case_insensitive: regex flag
        """
        self.allowlist = self.load_allowlist(allowlist_path) if allowlist_path else set()
        self.url_model = joblib.load(url_model_path) if url_model_path else None

        self.suspicious_tlds = ['zip','cricket','link','work','party','gq','kim','country','science','tk']
        self.suspicious_domains = ['luckytime.co.kr','mattfoll.eu.interia.pl','trafficholder.com','dl.baixaki.com.br','bembed.redtube.comr','tags.expo9.exponential.com','deepspacer.com','funad.co.kr','trafficconverter.biz']
        self.flags = re.IGNORECASE if case_insensitive else 0

    def load_allowlist(self, filepath: str) -> set:
        """Load allowlisted domains from CSV (second column)."""
        domains = set()
        try:
            df = pd.read_csv(filepath, header=None, usecols=[1], names=['domain'], low_memory=False)
            domains = set(df['domain'].str.lower())
        except Exception:
            pass
        return domains

    def get_domain(self, url: str) -> str:
        """Extract and normalize the domain portion of a URL."""
        try:
            return urlparse(url).netloc.lower()
        except Exception:
            return ''

    def extract_urls(self, text: str) -> list:
        """Find all URLs in a string using regex."""
        return self.URL_REGEX.findall(text or '')

    def is_ip_address(self, domain: str) -> bool:
        """Check if domain is an IP address."""
        try:
            ipaddress.ip_address(domain)
            return True
        except ValueError:
            return False
        
    def analyze_urls_in_text(self, command_text):
        malicious_urls_found = []
        urls = self.extract_urls(command_text)
        for url in urls:
            domain = self.get_domain(url)
            # Check 1: Allowlist
            if domain and domain in self.allowlist:
                continue # Skip if domain is allowlisted

            # Check 2: ML Model (if not allowlisted and model loaded)
            if self.url_model:
                try:
                    features = self.extract_features(url) # Extract features
                    # Model expects 2D array: [[feature1, feature2, ...]]
                    prediction = self.url_model.predict([features])
                    if prediction[0] == '1': # Assuming 1 means malicious
                        malicious_urls_found.append(url)
                except Exception as e:
                    print(f"Error predicting URL '{url}': {e}")
        return malicious_urls_found

    def extract_features(self, url: str) -> list:
        """
        Compute URL features:
        [dots, hyphens, url_len, ats, dbl_slashes, subdirs,
         subdomain_count, netloc_len, query_count, ip_flag,
         tld_flag, domain_flag]
        """
        parsed = urlparse(url)
        ext = tldextract.extract(url)
        sd, nl, path, qry = ext.subdomain or '', parsed.netloc or '', parsed.path or '', parsed.query or ''
        dom, suf = ext.domain or '', ext.suffix or ''

        return [
            sd.count('.'),
            nl.count('-'),
            len(url),
            nl.count('@'),
            path.count('//'),
            path.count('/'),
            len(sd.split('.')) if sd else 0,
            len(nl),
            len([q for q in qry.split('&') if q]),
            int(self.is_ip_address(dom)),
            int(suf in self.suspicious_tlds),
            int(f"{dom}.{suf}" in self.suspicious_domains),
        ]

    def scan_with_yara(self, command: str) -> list:
        """Apply R1–R8 patterns to the command string."""
        hits = []
        for rid, pat in self._YARA_PATTERNS.items():
            if re.search(pat, command, self.flags):
                hits.append(rid)
        return hits

    def map_behaviors(self, matched_rules: list) -> list:
        """Map low-level rule hits to M1–M4 behaviors."""
        behaviors = []
        for bid, seqs in self._BEHAVIOR_SEQUENCES.items():
            for seq in seqs:
                if all(r in matched_rules for r in seq):
                    behaviors.append(bid)
                    break
        return behaviors

    def analyze_command(self, command: str) -> dict:
        """
        Full analysis pipeline:
          - Extract URLs
          - For each URL: allowlist check or feature extraction
          - Scan command with YARA rules
          - Map behaviors
        Returns: {
            'urls': [(url, 'ALLOW' or feature_list)],
            'rules': [R-hits],
            'behaviors': [M-behaviors]
        }
        """
        urls = self.extract_urls(command)
        url_results = []
        for u in urls:
            dom = tldextract.extract(u).domain.lower()
            if dom in self.allowlist:
                url_results.append((u, 'ALLOW'))
            else:
                url_results.append((u, self.extract_features(u)))

        rules = self.scan_with_yara(command)
        behaviors = self.map_behaviors(rules)

        return {
            'urls': url_results,
            'rules': rules,
            'behaviors': behaviors
        }

