import os, sys
import json
import bashlex
from urllib.parse import urlparse # For domain extraction
import joblib # To load the model

from modules.ShellCommandAnalyzer import *


# Helper to check URLs within a command string
shellCommandAnalyzer = ShellCommandAnalyzer(allowlist_path="top-1m.csv", url_model_path="model/logistic_model.pkl")

# --- Updated Detection Function ---

def detect_shell_commands_and_urls(package_path):
    """
    Detects shell commands in package.json and .sh files,
    and analyzes URLs found within them using an allowlist and ML model.
    """
    package_path = os.path.expanduser(package_path)
    commands_info = []
    # Basic labeling based on path (as before)
    label = 1 if 'malware' in package_path.lower() else 0
    package_name = os.path.basename(package_path)

    # 1. Process package.json
    package_json_path = os.path.join(package_path, 'package.json')
    if os.path.exists(package_json_path):
        try:
            with open(package_json_path, 'r', errors='ignore') as f:
                package_data = json.load(f)
                if 'scripts' in package_data and isinstance(package_data['scripts'], dict):
                    for script_name, script_command in package_data['scripts'].items():
                        # Ensure script_command is a string before processing
                        if not isinstance(script_command, str):
                            continue

                        source_details = f'package.json (script: {script_name})'
                        detected_malicious_urls = shellCommandAnalyzer.analyze_urls_in_text(script_command)

                        # Also run YARA scan on the command
                        yara_matches = []
                        try:
                            # Optional: parse first if needed by YARA or other analysis
                            # nodes = bashlex.parse(script_command)
                            yara_matches = shellCommandAnalyzer.scan_with_yara(script_command)
                            behaviors = shellCommandAnalyzer.map_behaviors(yara_matches)
                        except bashlex.errors.ParsingError as pe:
                             print(f"Bashlex parsing error in {source_details}: {pe}. Scanning raw command.")
                             yara_matches = shellCommandAnalyzer.scan_with_yara(script_command) # Scan raw on parse error
                        except Exception as e:
                            print(f"Error scanning command in {source_details}: {e}")


                        # Add entry if YARA matched OR a malicious URL was found
                        if yara_matches or detected_malicious_urls:
                            commands_info.append({
                                'command': script_command,
                                'source_file': source_details,
                                'package_name': package_name,
                                'label': label,
                                'yara_matches': yara_matches,
                                "behaviors": behaviors,
                                'detected_malicious_urls': detected_malicious_urls
                            })
        except json.JSONDecodeError:
            print(f"Error decoding JSON in {package_json_path}")
        except Exception as e:
            print(f"An unexpected error occurred reading {package_json_path}: {e}")

    # 2. Process .sh files
    for root, _, files in os.walk(package_path):
        # Skip node_modules directories to potentially speed up scanning
        if 'node_modules' in root.split(os.sep):
            continue
        for file in files:
            if file.endswith('.sh'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', errors='ignore') as f:
                        content = f.read()
                        source_details = file_path
                        detected_malicious_urls = shellCommandAnalyzer.analyze_urls_in_text(content)

                        # Also run YARA scan on the file content
                        yara_matches = []
                        try:
                            yara_matches = shellCommandAnalyzer.scan_with_yara(content)
                        except Exception as e:
                           print(f"Error scanning .sh file {file_path}: {e}")


                        # Add entry if YARA matched OR a malicious URL was found
                        if yara_matches or detected_malicious_urls:
                            commands_info.append({
                                'command': content, # Store full content for .sh
                                'source_file': source_details,
                                'package_name': package_name,
                                'label': label,
                                'yara_matches': yara_matches,
                                'detected_malicious_urls': detected_malicious_urls
                            })
                except Exception as e:
                    print(f"Error processing .sh file {file_path}: {e}")

    return commands_info

# --- Example Usage ---
if __name__ == "__main__":
    # Replace with the actual path to a package you want to scan
    target_package_path = sys.argv[1] if len(sys.argv) > 1 else '~/Donapi/npm-cache/test/all-paths-1.0.2'
    target_package_path = os.path.expanduser(target_package_path)    # Make sure the paths to top-1m.csv and the model are correct relative to
    # where you run the script, or use absolute paths.

    analysis_results = detect_shell_commands_and_urls(target_package_path)

    if analysis_results:
        print("\n--- Analysis Results ---")
        print(json.dumps(analysis_results, indent=2))
        print(f"[DEBUG] Scanning package: {target_package_path}")
    else:
        print("\nNo suspicious commands or malicious URLs detected.")
        print(f"[DEBUG] Scanning package: {target_package_path}")
