import os
import json
import re
import base64

def detect_shell_commands(package_path):
    package_path = os.path.expanduser(package_path)
    dangerous_commands = ['curl', 'wget', 'bash', 'sh', 'powershell', 'cmd', 'chmod', 'node']
    dangerous_patterns = [
        r'curl\s+http', r'wget\s+http', r'bash\s+-c', r'sh\s+-c',
        r'powershell\s+-c', r'cmd\s+/c', r'chmod\s+\+x',
        r'exec\s*\(', r'fork\s*\(', r'spawn\s*\(',
        r'node\s+\S+\.js'  # Phát hiện "node <file>.js"
    ]
    results = []

    # Check package.json for shell commands in scripts
    package_json_path = os.path.join(package_path, 'package.json')
    if os.path.exists(package_json_path):
        try:
            with open(package_json_path, 'r') as f:
                package_data = json.load(f)
            scripts = package_data.get('scripts', {})
            # Check preinstall, install, postinstall specifically
            suspicious_scripts = ['preinstall', 'install', 'postinstall']
            for script_name in suspicious_scripts:
                if script_name in scripts:
                    script = scripts[script_name]
                    script_lower = script.lower()
                    for cmd in dangerous_commands:
                        if cmd in script_lower:
                            for pattern in dangerous_patterns:
                                if re.search(pattern, script_lower, re.IGNORECASE):
                                    results.append([f"{script_name}: {script}", os.path.basename(package_path), 1])
                                    break
            # Check all scripts for other dangerous commands
            for script_name, script in scripts.items():
                if script_name not in suspicious_scripts:
                    script_lower = script.lower()
                    for cmd in dangerous_commands:
                        if cmd in script_lower:
                            for pattern in dangerous_patterns:
                                if re.search(pattern, script_lower, re.IGNORECASE):
                                    results.append([f"{script_name}: {script}", os.path.basename(package_path), 1])
                                    break
                # Check for base64 encoded commands
                for word in script.split():
                    try:
                        decoded = base64.b64decode(word).decode('utf-8')
                        if any(cmd in decoded.lower() for cmd in dangerous_commands):
                            results.append([f"Base64 decoded: {decoded}", os.path.basename(package_path), 1])
                    except:
                        pass
        except Exception as e:
            print(f"Error reading package.json: {e}")

    # Check JavaScript files for shell commands
    js_files = [f for f in os.listdir(package_path) if f.endswith('.js')]
    for js_file in js_files:
        js_path = os.path.join(package_path, js_file)
        try:
            with open(js_path, 'r') as f:
                code = f.read()
            code_lower = code.lower()
            for cmd in dangerous_commands:
                if cmd in code_lower:
                    for pattern in dangerous_patterns:
                        if re.search(pattern, code_lower, re.IGNORECASE):
                            results.append([f"Found '{cmd}' in {js_file}", os.path.basename(package_path), 1])
                            break
            # Check for base64 encoded commands
            for word in code.split():
                try:
                    decoded = base64.b64decode(word).decode('utf-8')
                    if any(cmd in decoded.lower() for cmd in dangerous_commands):
                        results.append([f"Base64 decoded in {js_file}: {decoded}", os.path.basename(package_path), 1])
                except:
                    pass
        except Exception as e:
            print(f"Error reading {js_file}: {e}")

    return results
