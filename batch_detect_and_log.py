import os
import subprocess
import re
from collections import Counter

M_LABELS = ['M1', 'M2', 'M3', 'M4', 'M5']
result_log_path = "pipeline_summary.log"
package_root = "/home/chien/hocmay/donapi/npm-cache/malware/extracted"

summary = []
label_counter = Counter()
total_packages = 0

with open(result_log_path, "w") as log:
    log.write("📄 Tổng hợp kết quả pipeline\n")
    log.write("=====================================\n\n")

    for folder in os.listdir(package_root):
        pkg_path = os.path.join(package_root, folder)
        merged_js = os.path.join(pkg_path, "merged.js")
        if not os.path.isdir(pkg_path):
            continue

        print(f"🔍 Đang xử lý: {folder}")
        try:
            result = subprocess.run(
                ['python3', 'pipeline.py', pkg_path],
                capture_output=True,
                text=True,
                timeout=60
            )
        except subprocess.TimeoutExpired:
            print(f"⏱️ Timeout tại: {folder}")
            continue

        output = result.stdout
        final_labels = set()

        # Lấy nhãn hành vi (chỉ 1 Mx duy nhất mỗi loại)
        behavior_match = re.findall(r"M[1-5]", output)
        final_labels.update(set(behavior_match))

        if "FINAL_VERDICT:BENIGN" in output.upper():
            final_labels = {"BENIGN"}

        summary.append((folder, sorted(final_labels)))
        for lbl in final_labels:
            label_counter[lbl] += 1

        total_packages += 1
        log.write(f"{folder}: {', '.join(sorted(final_labels))}\n")

    log.write("\n📊 Thống kê tổng hợp\n")
    log.write("=====================================\n")
    for label in sorted(label_counter):
        count = label_counter[label]
        pct = round((count / total_packages) * 100, 2) if total_packages else 0
        log.write(f"{label}: {count} gói ({pct}%)\n")

    log.write(f"\n📦 Tổng số gói đã xử lý: {total_packages}\n")
