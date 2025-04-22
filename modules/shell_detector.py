import json
import os
import subprocess
import bashlex
import re
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import numpy as np

def parse_shell_command(script):
    try:
        parsed = bashlex.parse(script)
        return [node.word for node in parsed if hasattr(node, 'word')]
    except Exception as e:
        print(f"Error parsing shell command: {e}")
        return []

def run_in_sandbox(script_path):
    try:
        result = subprocess.run(
            ['docker', 'run', '--rm', '-v', f'{os.path.abspath(script_path)}:/script.sh', 'ubuntu', '/bin/sh', '-x', '/script.sh'],
            capture_output=True, text=True, timeout=10
        )
        return result.stdout.split('\n')
    except subprocess.TimeoutExpired:
        return ['Timeout']
    except Exception as e:
        print(f"Error running sandbox: {e}")
        return []

def load_yara_rules():
    return [
        {'name': 'curl_to_external', 'pattern': r'curl\s+.*https?://'},
        {'name': 'wget_to_external', 'pattern': r'wget\s+.*https?://'},
        {'name': 'rm_rf', 'pattern': r'rm\s+-rf'},
    ]

def check_yara_rules(commands):
    yara_rules = load_yara_rules()
    matches = []
    for cmd in commands:
        for rule in yara_rules:
            if re.search(rule['pattern'], cmd):
                matches.append(rule['name'])
    return matches

def extract_url_features(url):
    return {
        'length': len(url),
        'subdomain_count': url.count('.') - 1,
        'has_special_chars': int(any(c in url for c in '!@#$%^&*')),
        'entropy': -sum((url.count(c) / len(url)) * np.log2(url.count(c) / len(url)) for c in set(url) if url.count(c) > 0)
    }

def train_url_model():
    # Giả lập dữ liệu huấn luyện
    data = pd.read_csv('datasets/urls.csv')
    X = data[['length', 'subdomain_count', 'has_special_chars', 'entropy']]
    y = data['label']
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)
    return model

def detect_malicious_urls(urls):
    if not urls:
        return []
    model = train_url_model()
    features = [extract_url_features(url) for url in urls]
    df = pd.DataFrame(features)
    return model.predict(df[['length', 'subdomain_count', 'has_special_chars', 'entropy']])

def detect_shell_commands(package_path):
    try:
        package_json = json.load(open(os.path.join(package_path, 'package.json')))
        scripts = package_json.get('scripts', {})
        shell_commands = []
        yara_matches = []
        urls = []

        # Phân tích scripts
        for script in scripts.values():
            commands = parse_shell_command(script)
            shell_commands.extend(commands)
            urls.extend([word for word in commands if re.match(r'https?://', word)])

        # Tìm và chạy tệp .sh
        for root, _, files in os.walk(package_path):
            for file in files:
                if file.endswith('.sh'):
                    script_path = os.path.join(root, file)
                    sandbox_output = run_in_sandbox(script_path)
                    shell_commands.extend(sandbox_output)
                    urls.extend([word for word in sandbox_output if re.match(r'https?://', word)])

        # Kiểm tra YARA rules
        yara_matches = check_yara_rules(shell_commands)

        # Kiểm tra URL
        malicious_urls = detect_malicious_urls(urls)

        return {
            'commands': shell_commands,
            'yara_matches': yara_matches,
            'malicious_urls': malicious_urls.tolist(),
            'malicious': len(yara_matches) > 0 or any(malicious_urls)
        }
    except Exception as e:
        print(f"Error detecting shell commands: {e}")
        return {'malicious': False, 'commands': [], 'yara_matches': [], 'malicious_urls': []}
