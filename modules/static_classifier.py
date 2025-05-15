import os
import math
import re
import base64

def calculate_entropy(text):
    if not text:
        return 0
    entropy = 0
    for x in range(256):
        p_x = float(text.count(chr(x))) / len(text)
        if p_x > 0:
            entropy -= p_x * math.log2(p_x)
    return entropy

def is_obfuscated_variable_name(name):
    return bool(re.match(r'^[a-zA-Z]{1,2}[0-9]{0,2}$', name))  # ví dụ: a1, zz, x4

def count_obfuscated_vars(code):
    # Đếm số biến đặt tên khó hiểu
    var_names = re.findall(r'var\s+([a-zA-Z0-9_]+)|let\s+([a-zA-Z0-9_]+)|const\s+([a-zA-Z0-9_]+)', code)
    flat_names = [name for group in var_names for name in group if name]
    obfuscated_count = sum(1 for name in flat_names if is_obfuscated_variable_name(name))
    return obfuscated_count, len(flat_names)

def classify_static(package_path):
    merged_path = os.path.join(package_path, 'merged.js')
    if not os.path.exists(merged_path):
        print(f"Warning: merged.js not found in {package_path}")
        return 'Benign'

    with open(merged_path, 'r', encoding='utf-8', errors='ignore') as f:
        code = f.read()

    dangerous_apis = [
        'eval', 'Function', 'child_process.exec', 'child_process.spawn',
        'http.request', 'https.request', 'fetch', 'fs.writeFile', 'fs.readFile',
        'process.exit', 'net.connect', 'dns.lookup', 'require("child_process")',
        'os.homedir', 'os.hostname', 'os.userInfo', 'dns.getServers'
    ]

    # 1. Kiểm tra API độc
    for api in dangerous_apis:
        if re.search(re.escape(api), code, re.IGNORECASE):
            print(f"[STATIC] Found dangerous API: {api}")
            return 'M2'

    # 2. Kiểm tra entropy cao (mã hóa khó đọc)
    entropy = calculate_entropy(code)
    print(f"[STATIC] Entropy of merged.js: {entropy}")
    if entropy > 5.5:
        print("[STATIC] High entropy → possible obfuscation")
        return 'M2'

    # 3. Kiểm tra số biến khó hiểu (x4, a1, zz...)
    obf_count, total_vars = count_obfuscated_vars(code)
    if total_vars > 0:
        ratio = obf_count / total_vars
        print(f"[STATIC] Obfuscated vars: {obf_count}/{total_vars} ({ratio:.2f})")
        if ratio > 0.5:
            print("[STATIC] High ratio of obfuscated variables → suspicious")
            return 'M2'

    # 4. Chuỗi base64 chứa hành vi nguy hiểm
    for word in code.split():
        try:
            decoded = base64.b64decode(word).decode('utf-8')
            for api in dangerous_apis:
                if api.lower() in decoded.lower():
                    print(f"[STATIC] Base64 decoded contains dangerous API: {decoded}")
                    return 'M2'
            if len(decoded) > 50:
                print(f"[STATIC] Suspicious long base64 decoded string: {decoded[:50]}...")
                return 'M2'
        except:
            continue

    return 'Benign'
