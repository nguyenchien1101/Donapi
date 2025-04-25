import os
import re
import base64

def extract_dynamic(package_path):
    dangerous_patterns = [
        'http.request', 'https.request', 'fetch', 'dns.lookup', 'net.connect',
        'fs.writeFile', 'fs.readFile', 'child_process.exec',
        'require("http")', 'require("https")', 'require("net")',
        'os.homedir', 'os.hostname', 'os.userInfo', 'dns.getServers',
        'querystring.stringify'  # Thêm để phát hiện gửi dữ liệu
    ]
    behaviors = []

    # Check merged.js for dynamic behaviors
    merged_path = os.path.join(package_path, 'merged.js')
    if not os.path.exists(merged_path):
        print(f"Warning: merged.js not found in {package_path}")
        return behaviors

    with open(merged_path, 'r') as f:
        code = f.read()

    code_lower = code.lower()
    for pattern in dangerous_patterns:
        if pattern.lower() in code_lower:
            behaviors.append([pattern, 1, os.path.basename(package_path), 1])

    # Check for base64 encoded behaviors
    for word in code.split():
        try:
            decoded = base64.b64decode(word).decode('utf-8')
            decoded_lower = decoded.lower()
            if any(pattern.lower() in decoded_lower for pattern in dangerous_patterns):
                behaviors.append([f"Base64 decoded: {decoded}", 1, os.path.basename(package_path), 1])
        except:
            pass

    return behaviors
