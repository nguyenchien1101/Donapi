import os
import subprocess
import json

def extract_dynamic(package_path):
       package_path = os.path.expanduser(package_path)
       package_name = os.path.basename(package_path)
       merged_js = os.path.join(package_path, 'merged.js')
       behaviors = []
       label = 1 if 'malware' in package_path else 0

       if not os.path.exists(merged_js):
           return []

       try:
           # Giả lập chạy mã trong môi trường an toàn (dùng Node.js sandbox)
           result = subprocess.run(
               ['node', '-e', f"""
               const vm = require('vm');
               const fs = require('fs');
               const code = fs.readFileSync('{merged_js}', 'utf-8');
               const sandbox = {{}};
               vm.createContext(sandbox);
               vm.runInContext(code, sandbox);
               console.log(JSON.stringify(Object.keys(sandbox)));
               """],
               capture_output=True, text=True, timeout=5
           )
           if result.stdout:
               behaviors.append(('dynamic_execution', len(result.stdout), package_name, label))
       except subprocess.TimeoutExpired:
           behaviors.append(('timeout', 1, package_name, label))
       except Exception as e:
           behaviors.append(('error', str(e), package_name, label))

       return behaviors
