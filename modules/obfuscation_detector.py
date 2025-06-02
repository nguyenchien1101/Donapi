import re
import os
import json
import pandas as pd
import math
import sys
from collections import Counter
from joblib import load

def entropy(s):
    p, lns = Counter(s), float(len(s))
    return -sum(count / lns * math.log(count / lns, 2) for count in p.values()) if lns > 0 else 0

def extract_obfuscation_features(code):
    js_length = len(code)
    if js_length == 0:
        return None

    num_spaces = code.count(' ')
    num_parenthesis = code.count('(') + code.count(')')
    num_slash = code.count('/')
    num_plus = code.count('+')
    num_point = code.count('.')
    num_comma = code.count(',')
    num_semicolon = code.count(';')
    num_alpha = len(re.findall(r"\w", code))
    num_numeric = len(re.findall(r"[0-9]", code))

    ratio_spaces = num_spaces / js_length
    ratio_alpha = num_alpha / js_length
    ratio_numeric = num_numeric / js_length
    ratio_parenthesis = num_parenthesis / js_length
    ratio_slash = num_slash / js_length
    ratio_plus = num_plus / js_length
    ratio_point = num_point / js_length
    ratio_comma = num_comma / js_length
    ratio_semicolon = num_semicolon / js_length

    ent = entropy(code)

    num_string_oper = sum(code.count(kw) for kw in ['substring', 'charAt', 'split', 'concat', 'slice', 'substr'])
    ratio_num_string_oper = num_string_oper / js_length

    num_encoding_oper = sum(code.count(kw) for kw in ['escape', 'unescape', 'string', 'fromCharCode'])
    ratio_num_encoding_oper = num_encoding_oper / js_length

    num_url_redirection = sum(code.count(kw) for kw in [
        'setTimeout', 'location.reload', 'location.replace',
        'document.URL', 'document.location', 'document.referrer'
    ])
    ratio_num_url_redirection = num_url_redirection / js_length

    num_specific_func = sum(code.count(kw) for kw in [
        'eval', 'setTime', 'setInterval', 'ActiveXObject',
        'createElement', 'document.write', 'document.writeln',
        'document.replaceChildren'
    ])
    ratio_num_specific_func = num_specific_func / js_length

    return {
        'js_length': js_length,
        'num_spaces': num_spaces,
        'num_parenthesis': num_parenthesis,
        'num_slash': num_slash,
        'num_plus': num_plus,
        'num_point': num_point,
        'num_comma': num_comma,
        'num_semicolon': num_semicolon,
        'num_alpha': num_alpha,
        'num_numeric': num_numeric,
        'ratio_spaces': ratio_spaces,
        'ratio_alpha': ratio_alpha,
        'ratio_numeric': ratio_numeric,
        'ratio_parenthesis': ratio_parenthesis,
        'ratio_slash': ratio_slash,
        'ratio_plus': ratio_plus,
        'ratio_point': ratio_point,
        'ratio_comma': ratio_comma,
        'ratio_semicolon': ratio_semicolon,
        'entropy': ent,
        'num_string_oper': num_string_oper,
        'ratio_num_string_oper': ratio_num_string_oper,
        'num_encoding_oper': num_encoding_oper,
        'ratio_num_encoding_oper': ratio_num_encoding_oper,
        'num_url_redirection': num_url_redirection,
        'ratio_num_url_redirection': ratio_num_url_redirection,
        'num_specific_func': num_specific_func,
        'ratio_num_specific_func': ratio_num_specific_func
    }

def contains_manual_obfuscation_patterns(code: str) -> bool:
    patterns = [
        r'_0x[a-fA-F0-9]{4,}',
        r'(?:while|for)\s*\(\s*!!\[\s*\]\)',
        r'parseInt\(\s*[\'"]0x[a-f0-9]+',
        r'\[\s*[\'"]0x[a-f0-9]+[\'"]\s*\]',
        r'(function\s*\([^\)]*\)\s*\{[^}]*\})\(\)',
        r'\(function\(_0x[a-fA-F0-9]{4,},_0x[a-fA-F0-9]{4,}\)\{[^}]+?\}\(\)\s*;'
    ]
    return any(re.search(p, code) for p in patterns)

def load_trained_model():
    return load('model/random_forest_model.pkl')

def detect_obfuscation(code_path):
    try:
        with open(code_path, 'r', encoding='utf-8') as f:
            code = f.read()

        pkg_match = re.search(r'const packageJSON\s*=\s*({.*?})\s*;', code, re.DOTALL)
        if pkg_match:
            try:
                pkg_json = json.loads(pkg_match.group(1))
                scripts = json.dumps(pkg_json.get("scripts", {}))
                if re.search(r'(eval|node\s+-e|obfuscate|while\s*\(|Buffer\.from|atob)', scripts):
                    print("⚠️  Phát hiện mã rối trong package.json scripts")
                    return True
            except Exception as e:
                print(f"❌ Lỗi khi parse package.json: {e}")

        features = extract_obfuscation_features(code)
        if features is None:
            print("⚠️ Không có nội dung để phân tích")
            return False

        df = pd.DataFrame([features])
        model = load_trained_model()
        prediction = model.predict(df[list(features.keys())])[0]
        if prediction:
            print("✅ Mô hình phát hiện mã rối")
            return True

        if contains_manual_obfuscation_patterns(code):
            print("⚠️  Rule thủ công phát hiện mã rối")
            return True

        return False

    except Exception as e:
        print(f"❌ Lỗi khi kiểm tra rối mã: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Cách dùng: python3 obfuscation_detector.py <đường_dẫn_merged.js>")
        sys.exit(1)

    path = os.path.abspath(sys.argv[1])
    if not os.path.exists(path):
        print("❌ File không tồn tại:", path)
    else:
        result = detect_obfuscation(path)
        print("🔍 File:", path)
        print("Obfuscated:", result)
