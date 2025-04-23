import os
import requests
import subprocess
import json
from pathlib import Path

# Thư mục lưu gói
SAVE_DIR = os.path.expanduser("~/hocmay/donapi/npm-cache/benign")
os.makedirs(SAVE_DIR, exist_ok=True)

# Số lượng gói cần tải
NUM_PACKAGES = 400

# Lấy danh sách gói từ API của npm (search by keyword for safety)
def get_top_packages(n=400):
    packages = []
    size = 250  # mỗi lần query tối đa 250
    page = 0
    while len(packages) < n:
        url = f"https://registry.npmjs.org/-/v1/search?text=keywords:utility&size={size}&from={page * size}"
        res = requests.get(url)
        data = res.json()
        if not data.get('objects'):
            break
        for obj in data['objects']:
            packages.append(obj['package']['name'])
        page += 1
    return packages[:n]

# Kiểm tra xem package có script đáng ngờ không
def has_suspicious_script(package_json):
    scripts = package_json.get("scripts", {})
    for key in scripts:
        if "install" in key.lower():
            return True
    return False

# Tải gói và lọc script
def download_package(name):
    try:
        print(f"-> Đang xử lý: {name}")
        # Lấy metadata
        meta_url = f"https://registry.npmjs.org/{name}"
        meta = requests.get(meta_url).json()
        latest = meta["dist-tags"]["latest"]
        version_info = meta["versions"][latest]
        if has_suspicious_script(version_info):
            print("   ⚠️ Bỏ qua do có install script.")
            return False

        tarball_url = version_info["dist"]["tarball"]
        tarball_name = tarball_url.split("/")[-1]
        save_path = os.path.join(SAVE_DIR, tarball_name)

        if os.path.exists(save_path):
            print("   ✅ Đã có sẵn.")
            return True

        with requests.get(tarball_url, stream=True) as r:
            r.raise_for_status()
            with open(save_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
        print("   ✅ Tải thành công.")
        return True
    except Exception as e:
        print(f"   ❌ Lỗi: {e}")
        return False

def main():
    packages = get_top_packages(NUM_PACKAGES)
    downloaded = 0
    for pkg in packages:
        if download_package(pkg):
            downloaded += 1
        if downloaded >= NUM_PACKAGES:
            break
    print(f"\nHoàn tất: Đã tải {downloaded} gói lành tính vào {SAVE_DIR}")

if __name__ == "__main__":
    main()

