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
            entropy += - p_x * math.log2(p_x)
    return entropy

def classify_static(package_path):
    dangerous_apis = [
        'eval', 'Function', 'child_process.exec', 'child_process.spawn',
        'http.request', 'https.request', 'fetch', 'fs.writeFile', 'fs.readFile',
        'process.exit', 'net.connect', 'dns.lookup', 'require("child_process")',
        'os.homedir', 'os.hostname', 'os.userInfo', 'dns.getServers'
    ]

    # Check merged.js for dangerous APIs
    merged_path = os.path.join(package_path, 'merged.js')
    if not os.path.exists(merged_path):
        print(f"Warning: merged.js not found in {package_path}")
        return 'Benign'

    with open(merged_path, 'r') as f:
        code = f.read()

    # Check for dangerous APIs
    code_lower = code.lower()
    for api in dangerous_apis:
        if api.lower() in code_lower:
            print(f"Found dangerous API: {api}")
            return 'M2'

    # Check for obfuscation (high entropy)
    entropy = calculate_entropy(code)
    print(f"Entropy of merged.js: {entropy}")
    if entropy > 5.5:
        print("High entropy detected, possible obfuscation")
        return 'M2'

    # Check for base64 encoded strings
    for word in code.split():
        try:
            decoded = base64.b64decode(word).decode('utf-8')
            if any(api.lower() in decoded.lower() for api in dangerous_apis):
                print(f"Base64 decoded dangerous API: {decoded}")
                return 'M2'
            if len(decoded) > 50:
                print(f"Suspicious base64 decoded string: {decoded}")
                return 'M2'
        except:
            pass

    return 'Benign'
