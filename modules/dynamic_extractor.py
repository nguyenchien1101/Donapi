import os
import re
import base64

def extract_dynamic(package_path):
    merged_path = os.path.join(package_path, 'merged.js')
    package_name = os.path.basename(package_path)
    behaviors = []

    if not os.path.exists(merged_path):
        print(f"Warning: merged.js not found in {package_path}")
        return behaviors

    with open(merged_path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()

    # Mẫu regex để dò API nguy hiểm linh hoạt hơn
    patterns = {
        r'https\s*\.\s*request': 'M1',
        r'require\s*\(\s*[\'"]https[\'"]\s*\)': 'M3',
        r'os\s*\.\s*userInfo': 'M1',
        r'os\s*\.\s*homedir': 'M1',
        r'fs\s*\.\s*writeFile': 'M2',
        r'fs\s*\.\s*readFile': 'M2',
        r'child_process\s*\.\s*exec': 'M5',
        r'dns\s*\.\s*getServers': 'M1',
        r'querystring\s*\.\s*stringify': 'M1',
        r'eval\s*\(': 'M3',
        r'Function\s*\(': 'M3'
    }

    # Dò trong từng dòng
    for idx, line in enumerate(lines, start=1):
        for regex, label in patterns.items():
            if re.search(regex, line):
                behaviors.append([f'{regex} @ line {idx}', 1, package_name, label])

    # Dò các chuỗi base64 nghi ngờ
    code = ''.join(lines)
    suspicious = re.findall(r'["\']([A-Za-z0-9+/=]{20,})["\']', code)
    for encoded in suspicious:
        try:
            decoded = base64.b64decode(encoded).decode('utf-8')
            for regex, label in patterns.items():
                if re.search(regex, decoded):
                    behaviors.append([f'Base64 decoded → {regex}', 1, package_name, label])
        except:
            continue

    return behaviors
