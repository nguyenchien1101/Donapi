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

       # Ensure logs directory exists
       log_dir = os.path.expanduser('~/hocmay/donapi/logs')
       os.makedirs(log_dir, exist_ok=True)
       results_log = os.path.join(log_dir, 'results.log')

       # Ensure datasets directory exists
       dataset_dir = os.path.expanduser('~/hocmay/donapi/datasets')
       os.makedirs(dataset_dir, exist_ok=True)
       shell_csv = os.path.join(dataset_dir, 'shell_commands.csv')
       behavior_csv = os.path.join(dataset_dir, 'behavior.csv')

       # Step 1: Shell Detection
       shell_commands = detect_shell_commands(package_path)
       if shell_commands:
           with open(shell_csv, 'a') as f:
               for cmd, pkg, lbl in shell_commands:
                   f.write(f"{cmd},{pkg},{lbl}\n")

       # Step 2: Reconstruct Code
       try:
           subprocess.run(['node', '-e', f"""
           const fn = require('./modules/reconstruct_code');
           fn('{package_path}');
           """], check=True)
       except subprocess.CalledProcessError:
           pass

       # Step 3: Static Analysis
       static_result = classify_static(package_path)
       if static_result != 'Benign':
           with open(results_log, 'a') as f:
               f.write(f"{package_name},{static_result}\n")
           return static_result

       # Step 4: Dynamic Analysis
       dynamic_behaviors = extract_dynamic(package_path)
       if dynamic_behaviors:
           with open(behavior_csv, 'a') as f:
               for behavior, count, pkg, lbl in dynamic_behaviors:
                   f.write(f"{behavior},{count},{pkg},{lbl}\n")
           with open(results_log, 'a') as f:
               f.write(f"{package_name},M3\n")
           return 'M3'

       # Default: Benign
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
