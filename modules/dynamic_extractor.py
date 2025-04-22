import subprocess
import json
import os

def dynamic_extract(package_path):
    try:
        docker_image = 'custom-nodejs'
        package_name = os.path.basename(package_path)
        output_log = f'logs/{package_name}_dynamic.json'

        subprocess.run([
            'docker', 'run', '--rm',
            '-v', f'{os.path.abspath(package_path)}:/package',
            '-v', f'{os.path.abspath("logs")}/:/logs',
            docker_image,
            'npm', 'install', '/package', '--loglevel=verbose'
        ], capture_output=True, text=True, timeout=30)

        # Giả lập API calls (cần Node.js instrumented)
        api_calls = [
            {'api': 'fs.writeFile', 'params': ['/tmp/test', 'data']},
            {'api': 'http.request', 'params': ['https://example.com']}
        ]

        with open(output_log, 'w') as f:
            json.dump(api_calls, f)

        return api_calls
    except subprocess.TimeoutExpired:
        print("Dynamic analysis timed out")
        return []
    except Exception as e:
        print(f"Error in dynamic extraction: {e}")
        return []
