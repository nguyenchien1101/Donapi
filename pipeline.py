import os
import subprocess
import json
from modules.shell_detector import detect_shell_commands
from modules.obfuscation_detector import detect_obfuscation
from modules.dynamic_extractor import dynamic_extract
from modules.classifier import classify_behavior

def run_node_script(script, args):
    result = subprocess.run(['node', '-e', f"const fn = require('./modules/{script}'); console.log(JSON.stringify(fn('{args}')))"], capture_output=True, text=True)
    return json.loads(result.stdout)

def donapi_pipeline(package_path):
    try:
        # Bước 1: Tái tạo mã
        merged_code = run_node_script('reconstruct_code', package_path)
        if not merged_code:
            return 'Error in code reconstruction'

        # Bước 2: Kiểm tra shell
        shell_results = detect_shell_commands(package_path)
        if shell_results['malicious']:
            return classify_behavior(shell_results['commands'])

        # Bước 3: Kiểm tra che giấu
        is_obfuscated = detect_obfuscation(merged_code)

        # Bước 4: Phân tích tĩnh
        static_results = run_node_script('static_identifier', merged_code)
        if not is_obfuscated and not static_results['suspicious']:
            return 'Benign'

        # Bước 5: Phân tích động
        dynamic_results = dynamic_extract(package_path)

        # Bước 6: Phân loại
        combined_results = static_results['api_calls'] + dynamic_results
        return classify_behavior(combined_results)
    except Exception as e:
        print(f"Error in pipeline: ${e}")
        return 'Error'

if __name__ == '__main__':
    for package in os.listdir('npm-cache/malware'):
        result = donapi_pipeline(os.path.join('npm-cache/malware', package))
        print(f'Package ${package}: ${result}')
    for package in os.listdir('npm-cache/benign'):
        result = donapi_pipeline(os.path.join('npm-cache/benign', package))
        print(f'Package ${package}: ${result}')
