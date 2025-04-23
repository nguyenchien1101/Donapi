import os
import json
import bashlex
import re

def detect_shell_commands(package_path):
       package_path = os.path.expanduser(package_path)  # Mở rộng dấu ~
       commands = []
       label = 1 if 'malware' in package_path else 0
       package_name = os.path.basename(package_path)

       # Đọc package.json
       package_json_path = os.path.join(package_path, 'package.json')
       if os.path.exists(package_json_path):
           try:
               with open(package_json_path, 'r') as f:
                   package_data = json.load(f)
                   if 'scripts' in package_data:
                       for script in package_data['scripts'].values():
                           if any(cmd in script for cmd in ['curl', 'wget', 'bash', 'sh']):
                               commands.append((script, package_name, label))
           except json.JSONDecodeError:
               pass

       # Tìm file shell
       for root, _, files in os.walk(package_path):
           for file in files:
               if file.endswith('.sh'):
                   file_path = os.path.join(root, file)
                   try:
                       with open(file_path, 'r') as f:
                           content = f.read()
                           nodes = bashlex.parse(content)
                           for node in nodes:
                               command = node.word if hasattr(node, 'word') else str(node)
                               if any(cmd in command for cmd in ['curl', 'wget', 'bash', 'sh']):
                                   commands.append((command, package_name, label))
                   except Exception:
                       pass

       return commands
