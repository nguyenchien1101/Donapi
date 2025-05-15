import os
import json

def detect_shell_commands(package_path):
    """
    Detect dangerous shell scripts in package.json
    Returns: list of (command, package_name, label)
    """
    results = []
    package_name = os.path.basename(package_path)
    package_json_path = os.path.join(package_path, 'package.json')

    if not os.path.exists(package_json_path):
        return results  # no package.json

    try:
        with open(package_json_path, 'r', encoding='utf-8') as f:
            package_data = json.load(f)
    except Exception as e:
        print(f"[ShellDetector] Error parsing JSON in {package_name}: {e}")
        return results

    # Scripts to check (npm hooks that are auto-executed)
    script_keys = ['preinstall', 'install', 'postinstall']
    dangerous_keywords = ['curl', 'wget', 'base64', 'eval', 'sh', 'bash', 'node ', 'python', 'powershell', 'nc', 'chmod', 'exec']

    scripts = package_data.get('scripts', {})

    for key in script_keys:
        cmd = scripts.get(key)
        if not cmd:
            continue

        for keyword in dangerous_keywords:
            if keyword in cmd:
                # If command contains dangerous keyword, flag it
                results.append((f'{key}: {cmd}', package_name, 1))
                break  # stop after one match

    return results
