import os
import json
import pandas as pd
from modules.shell_detector import detect_shell_commands
from modules.static_classifier import classify_static
from modules.dynamic_extractor import extract_dynamic
import subprocess

def donapi_pipeline(package_path):
    package_path = os.path.expanduser(package_path)
    package_name = os.path.basename(package_path)
    label = 1 if 'malware' in package_path else 0

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

    package_json = os.path.join(package_path, 'package.json')
    print(f"Checking for package.json at: {package_json}")
    print(f"Exists: {os.path.exists(package_json)}")

    if not os.path.exists(package_json):
        print(f"Warning: package.json not found in {package_path}, proceeding with JS analysis")
        try:
            subprocess.run(['node', '-e', f"""
            const fn = require('./modules/reconstruct_code');
            fn('{package_path}');
            """], check=True)
            print("Reconstruct code completed successfully")
        except subprocess.CalledProcessError as e:
            print(f"Error in reconstruct_code: {e}")

    shell_commands = detect_shell_commands(package_path)
    print(f"Shell detection result: {shell_commands}")
    if shell_commands:
        log_details['shell_commands'] = shell_commands
        with open(shell_csv, 'a') as f:
            for cmd, pkg, lbl in shell_commands:
                f.write(f"{cmd},{pkg},{lbl}\n")

    try:
        subprocess.run(['node', '-e', f"""
        const fn = require('./modules/reconstruct_code');
        fn('{package_path}');
        """], check=True)
        print("Reconstruct code completed successfully")
    except subprocess.CalledProcessError as e:
        print(f"Error in reconstruct_code: {e}")
        merged_path = os.path.join(package_path, 'merged.js')
        with open(merged_path, 'w') as f:
            f.write('')

    static_result = classify_static(package_path)
    log_details['static_result'] = static_result
    print(f"Static analysis result: {static_result}")

    dynamic_behaviors = extract_dynamic(package_path)
    log_details['dynamic_behaviors'] = dynamic_behaviors
    print(f"Dynamic analysis result: {dynamic_behaviors}")
    if dynamic_behaviors:
        with open(behavior_csv, 'a') as f:
            for behavior, count, pkg, lbl in dynamic_behaviors:
                f.write(f"{behavior},{count},{pkg},{lbl}\n")

    # Classification logic
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

    return final_result
