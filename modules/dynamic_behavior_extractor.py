import subprocess
import sys
import os
import time

def run_dynamic_with_hook(merged_path):
    if not os.path.exists(merged_path):
        print(f"[ERROR] Không tìm thấy file: {merged_path}")
        return

    instrument_path = os.path.join(os.path.dirname(__file__), 'instrument.js')
    if not os.path.exists(instrument_path):
        print(f"[ERROR] Không tìm thấy instrument.js tại {instrument_path}")
        return

    print(f"[INFO] ▶️ Đang chạy merged.js với instrument hook...")
    try:
        start = time.time()
        result = subprocess.run(
            ['node', '-r', instrument_path, merged_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            timeout=30
        )
        duration = time.time() - start
    except subprocess.TimeoutExpired:
        print("[ERROR] ❌ Quá thời gian chạy node script.")
        return

    print(f"[INFO] ⏱️ Thời gian chạy: {duration:.2f}s")
    print(f"[INFO] 📤 Dòng stdout từ merged.js:")
    print("=" * 50)
    for line in result.stdout.strip().split('\n'):
        print(line)
    print("=" * 50)

    log_file = os.path.join(os.getcwd(), 'dynamic_log.jsonl')
    if os.path.exists(log_file):
        print(f"[✅] Đã ghi log hành vi tại: {log_file}")
    else:
        print("[⚠️] Không tìm thấy dynamic_log.jsonl nào được ghi.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Cách dùng: python3 dynamic_behavior_extractor.py <đường_dẫn_tới_merged.js>")
        sys.exit(1)

    merged_js = os.path.abspath(sys.argv[1])
    run_dynamic_with_hook(merged_js)
