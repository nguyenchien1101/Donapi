import os
import json
import re

def extract_entries(package_path):
    pkg_json_path = os.path.join(package_path, 'package.json')
    print(f"[DEBUG] Đọc file: {pkg_json_path}")
    if not os.path.exists(pkg_json_path):
        print("[ERROR] Không tìm thấy package.json")
        return []

    with open(pkg_json_path, 'r', encoding='utf-8') as f:
        pkg = json.load(f)

    entries = []

    def extract_js(val):
        if not isinstance(val, str):
            return
        tokens = re.findall(r'[\w./-]+\.js', val)
        for t in tokens:
            if t not in entries:
                entries.append(t)
                print(f"[DEBUG] -> extracted js: {t}")

    for key in ['exports', 'main', 'scripts', 'bin']:
        val = pkg.get(key)
        if isinstance(val, str):
            print(f"[DEBUG] {key}: {val}")
            extract_js(val)
        elif isinstance(val, dict):
            for v in val.values():
                if isinstance(v, str):
                    print(f"[DEBUG] {key} → {v}")
                    extract_js(v)

    return entries

def read_js(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def remove_internal_requires(code):
    return re.sub(r"const\s+\w+\s*=\s*require\(['\"]\.\.?/[^'\"]+['\"]\);?", '', code)

def remove_shebang(code):
    return re.sub(r'^#!.*\n', '', code)

def convert_module_exports(code, file_path):
    match = re.search(r"module\.exports\s*=\s*{", code)
    if match:
        filename = os.path.basename(file_path).replace(".js", "")
        alias = filename if filename.isidentifier() else "helper"
        code = re.sub(r"module\.exports\s*=", f"const {alias} =", code)
    return code

def inject_behavior():
    return '''\n// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
'''

def reconstruct_code(package_path):
    visited = set()
    merged_code = ""

    def resolve(file_path, depth=0):
        nonlocal merged_code
        if file_path in visited or depth > 10:
            return
        visited.add(file_path)

        if not file_path.endswith('.js') and not file_path.endswith('.json'):
            file_path += '.js'

        full_path = os.path.join(package_path, file_path)
        print(f"[DEBUG] Đang xử lý: {full_path}")
        if not os.path.exists(full_path):
            print(f"[WARNING] Bỏ qua: {full_path}")
            return

        if file_path.endswith('package.json'):
            try:
                with open(full_path, 'r', encoding='utf-8') as f:
                    pkg_data = json.load(f)
                json_as_js = f"const packageJSON = {json.dumps(pkg_data, indent=2)};"
                merged_code += f"\n// === Begin {file_path} ===\n{json_as_js}\n// === End {file_path} ===\n"
                print(f"[DEBUG] ✅ Hợp nhất: {file_path}")
            except Exception as e:
                print(f"[ERROR] Không thể parse package.json: {e}")
            return

        try:
            code = read_js(full_path)
        except Exception as e:
            print(f"[ERROR] Lỗi đọc file {full_path}: {e}")
            return

        code = remove_shebang(code)
        code = remove_internal_requires(code)
        code = convert_module_exports(code, file_path)

        internal_requires = re.findall(r'require\s*\(\s*[\'"](.\/[^\'"]+)[\'"]\s*\)', code)
        for dep in internal_requires:
            dep_path = os.path.normpath(os.path.join(os.path.dirname(file_path), dep))
            resolve(dep_path, depth + 1)

        merged_code += f"\n// === Begin {file_path} ===\n{code}\n// === End {file_path} ===\n"
        print(f"[DEBUG] ✅ Hợp nhất: {file_path}")

    entries = extract_entries(package_path)
    print(f"[INFO] Entry points được trích: {entries}")

    if not entries:
        print("[ERROR] Không có entry point nào được phát hiện.")
        return None

    for entry in entries:
        resolve(entry)

    merged_code += inject_behavior()
    out_path = os.path.join(package_path, 'merged.js')
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(merged_code)

    print(f"\n✅ Đã tạo file merged.js tại: {out_path}")
    return out_path

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Cách dùng: python3 reconstruct_module.py <đường_dẫn_gói_npm>")
        exit(1)

    pkg_path = os.path.expanduser(sys.argv[1])
    reconstruct_code(pkg_path)
