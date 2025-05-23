from collections import Counter

import os
import json
import pandas as pd
from modules.shell_detector import detect_shell_commands
from modules.static_classifier import classify_static
from modules.dynamic_extractor import extract_dynamic
import subprocess
import re

def donapi_pipeline(package_path):
    package_path = os.path.expanduser(package_path)
    package_name = os.path.basename(package_path)
    label = 1 if 'malware' in package_path else 0

    print(f"Checking for package.json at: {os.path.join(package_path, 'package.json')}")
    print(f"Exists: {os.path.exists(os.path.join(package_path, 'package.json'))}")

    log_dir = os.path.expanduser('~/hocmay/donapi/logs')
    os.makedirs(log_dir, exist_ok=True)
    results_log = os.path.join(log_dir, 'results.log')
    detailed_log_path = os.path.join(log_dir, f'{package_name}.json')

    dataset_dir = os.path.expanduser('~/hocmay/donapi/datasets')
    os.makedirs(dataset_dir, exist_ok=True)
    shell_csv = os.path.join(dataset_dir, 'shell_commands.csv')
    behavior_csv = os.path.join(dataset_dir, 'behavior.csv')

    log_details = {
        'package': package_name,
        'shell_commands': [],
        'static_result': None,
        'dynamic_behaviors': [],
        'final_classification': 'Benign'
    }

    if not os.path.exists(package_path):
        error_msg = f"Error: Package directory does not exist: {package_path}"
        print(error_msg)
        with open(results_log, 'a') as f:
            f.write(f"{package_name},Error: Directory not found\n")
        return error_msg

    # Run shell detection
    shell_commands = detect_shell_commands(package_path)
    print("\n📦 Shell Command Detection")
    if shell_commands:
        print(f"{'STT':<4} {'Shell Command':<40} {'Label':<5}")
        print("-" * 60)
        for i, (cmd, pkg, lbl) in enumerate(shell_commands, 1):
            print(f"{i:<4} {cmd:<40} M{lbl}")
        shell_label = f"M{shell_commands[0][2]}"
    else:
        print("✔️ No malicious shell commands found.")
        shell_label = "Benign"
    print(f"🧠 => Shell result: {shell_label}\n")

    # Log shell
    log_details['shell_commands'] = shell_commands
    if shell_commands:
        with open(shell_csv, 'a') as f:
            for cmd, pkg, lbl in shell_commands:
                f.write(f"{cmd},{pkg},{lbl}\n")

    # Run reconstruct code
    try:
        subprocess.run(['node', '-e', f"const fn = require('./modules/reconstruct_code'); fn('{package_path}');"], check=True)
        print(f"Merged 1 files into {os.path.join(package_path, 'merged.js')}")
    except subprocess.CalledProcessError as e:
        print(f"Error in reconstruct_code: {e}")
        with open(os.path.join(package_path, 'merged.js'), 'w') as f:
            f.write('')

    # Static analysis
    static_result = classify_static(package_path)
    log_details['static_result'] = static_result
    print("\n🧠 Static Analysis")
    if static_result != 'Benign':
        print(f"❗ Dangerous static pattern found: {static_result}")
    else:
        print("✔️ No dangerous static pattern found.")
    print(f"🧠 => Static result: {static_result}\n")

    # Dynamic analysis
    dynamic_behaviors = extract_dynamic(package_path)
    log_details['dynamic_behaviors'] = dynamic_behaviors
    print("📍 Dynamic Behavior Detection")
    if dynamic_behaviors:
        print(f"{'STT':<4} {'API':<30} {'Line':<6} {'Label':<5}")
        print("-" * 60)
        for i, (api, count, pkg, label) in enumerate(dynamic_behaviors, 1):
            line_match = re.search(r'@ line (\d+)', api)
            line = line_match.group(1) if line_match else "?"
            clean_api = re.sub(r'\\s\*\\.\\s\*', '.', re.sub(r'\\s\*', '', api.split('@')[0]))
            print(f"{i:<4} {clean_api:<30} {line:<6} {label}")
        dynamic_label = dynamic_behaviors[0][3]
    else:
        print("✔️ No malicious API calls found.")
        dynamic_label = "Benign"
    print(f"🧠 => Dynamic result: {dynamic_label}\n")

    if dynamic_behaviors:
        with open(behavior_csv, 'a') as f:
            for behavior, count, pkg, lbl in dynamic_behaviors:
                f.write(f"{behavior},{count},{pkg},{lbl}\n")

    # Final decision
    final_result = 'Benign'
    if shell_commands:
        final_result = 'M1'
    elif static_result != 'Benign':
        final_result = static_result
    elif dynamic_behaviors:
        final_result = 'M3'

    log_details['final_classification'] = final_result
    with open(results_log, 'a') as f:
        f.write(f"{package_name},{final_result}\n")

    with open(detailed_log_path, 'w') as f:
        json.dump(log_details, f, indent=2)

    

    # Thống kê tỷ lệ nhãn phát hiện
    labels = []
    if shell_commands:
        for _, _, lbl in shell_commands:
            labels.append(f"M{lbl}")
    if static_result != 'Benign':
        labels.append(static_result)
    for _, _, _, lbl in dynamic_behaviors:
        labels.append(lbl)

    label_counts = Counter(labels)
    total = sum(label_counts.values())
    percent_summary = ', '.join([f"{m}: {label_counts[m]/total*100:.1f}%" for m in sorted(label_counts)])

    print(f"🏁 Final classification for {package_name}: {final_result} ({percent_summary})\n")
    return final_result
