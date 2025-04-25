import os
import json
import pandas as pd
from modules.shell_detector import detect_shell_commands
from modules.static_classifier import classify_static
from modules.dynamic_extractor import extract_dynamic
import subprocess

def donapi_pipeline(package_path):
    # Expand ~ to full path
    package_path = os.path.expanduser(package_path)
    package_name = os.path.basename(package_path)
    label = 1 if 'malware' in package_path else 0

    # Ensure logs and datasets directories exist
    log_dir = os.path.expanduser('~/hocmay/donapi/logs')
    os.makedirs(log_dir, exist_ok=True)
    results_log = os.path.join(log_dir, 'results.log')
    dataset_dir = os.path.expanduser('~/hocmay/donapi/datasets')
    os.makedirs(dataset_dir, exist_ok=True)
    shell_csv = os.path.join(dataset_dir, 'shell_commands.csv')
    behavior_csv = os.path.join(dataset_dir, 'behavior.csv')

    # Check if package directory exists
    if not os.path.exists(package_path):
        error_msg = f"Error: Package directory does not exist: {package_path}"
        print(error_msg)
        with open(results_log, 'a') as f:
            f.write(f"{package_name},Error: Directory not found\n")
        return error_msg

    # Check for package.json
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
        static_result = classify_static(package_path)
        print(f"Static analysis result: {static_result}")
        if static_result != 'Benign':
            with open(results_log, 'a') as f:
                f.write(f"{package_name},{static_result}\n")
            return static_result
        dynamic_behaviors = extract_dynamic(package_path)
        print(f"Dynamic analysis result: {dynamic_behaviors}")
        if dynamic_behaviors:
            with open(behavior_csv, 'a') as f:
                for behavior, count, pkg, lbl in dynamic_behaviors:
                    f.write(f"{behavior},{count},{pkg},{lbl}\n")
            with open(results_log, 'a') as f:
                f.write(f"{package_name},M3\n")
            return 'M3'
        print("No malicious behaviors detected, marking as Benign")
        with open(results_log, 'a') as f:
            f.write(f"{package_name},Benign\n")
        return 'Benign'

    # Step 1: Shell Detection
    shell_commands = detect_shell_commands(package_path)
    print(f"Shell detection result: {shell_commands}")
    has_shell_commands = bool(shell_commands)
    if has_shell_commands:
        with open(shell_csv, 'a') as f:
            for cmd, pkg, lbl in shell_commands:
                f.write(f"{cmd},{pkg},{lbl}\n")

    # Step 2: Reconstruct Code
    try:
        subprocess.run(['node', '-e', f"""
        const fn = require('./modules/reconstruct_code');
        fn('{package_path}');
        """], check=True)
        print("Reconstruct code completed successfully")
    except subprocess.CalledProcessError as e:
        print(f"Error in reconstruct_code: {e}")
        # Create an empty merged.js to avoid errors in later steps
        merged_path = os.path.join(package_path, 'merged.js')
        with open(merged_path, 'w') as f:
            f.write('')

    # Step 3: Static Analysis
    static_result = classify_static(package_path)
    print(f"Static analysis result: {static_result}")
    has_static_malware = (static_result != 'Benign')
    if has_static_malware:
        with open(results_log, 'a') as f:
            f.write(f"{package_name},{static_result}\n")

    # Step 4: Dynamic Analysis
    dynamic_behaviors = extract_dynamic(package_path)
    print(f"Dynamic analysis result: {dynamic_behaviors}")
    has_dynamic_malware = bool(dynamic_behaviors)
    if has_dynamic_malware:
        with open(behavior_csv, 'a') as f:
            for behavior, count, pkg, lbl in dynamic_behaviors:
                f.write(f"{behavior},{count},{pkg},{lbl}\n")
        with open(results_log, 'a') as f:
            f.write(f"{package_name},M3\n")

    # Tổng hợp kết quả
    if has_shell_commands:
        with open(results_log, 'a') as f:
            f.write(f"{package_name},M1\n")
        return 'M1'
    if has_static_malware:
        return static_result
    if has_dynamic_malware:
        return 'M3'

    # Default: Benign
    print("No malicious behaviors detected, marking as Benign")
    with open(results_log, 'a') as f:
        f.write(f"{package_name},Benign\n")
    return 'Benign'

if __name__ == '__main__':
    benign_dir = '~/hocmay/donapi/npm-cache/benign/extracted'
    malware_dir = '~/hocmay/donapi/npm-cache/malware/extracted'
    for directory in [benign_dir, malware_dir]:
        directory = os.path.expanduser(directory)
        for package in os.listdir(directory):
            package_path = os.path.join(directory, package)
            if os.path.isdir(package_path):
                donapi_pipeline(package_path)
