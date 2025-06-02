import os
import subprocess
from modules.shell_detector import detect_shell_commands_and_urls as detect_shell_commands
from modules.obfuscation_detector import detect_obfuscation
from modules.static_classifier import classify_static
from modules.dynamic_behavior_extractor import run_dynamic_with_hook
from modules.hierarchical_classifier import classify_behavior_from_jsonl

def run_pipeline(package_path):
    print(f"\n📦 [Pipeline] Phân tích gói: {package_path}")
    package_path = os.path.abspath(package_path)
    merged_js = os.path.join(package_path, 'merged.js')

    # Step 1: Reconstruct
    print("\n🛠️ [1] Reconstructing...")
    subprocess.run(['python3', 'modules/reconstruct_module.py', package_path])
    if not os.path.exists(merged_js):
        print("❌ Không tạo được merged.js. Dừng pipeline.")
        return

    # Step 2: Shell Detector
    print("\n🧨 [2] Shell Detector...")
    shell_results = detect_shell_commands(package_path)
    shell_behaviors = []
    for r in shell_results:
        shell_behaviors.extend(r.get('behaviors', []))
    print(f"✅ Shell Behaviors: {shell_behaviors}")

    # Step 3: Obfuscation Detector
    print("\n🌀 [3] Obfuscation Detector...")
    try:
        is_obfuscated = detect_obfuscation(merged_js)
    except Exception as e:
        print(f"❌ Lỗi khi kiểm tra mã rối: {e}")
        is_obfuscated = False
    print(f"Obfuscated: {is_obfuscated}")

    static_result = "unknown"
    run_dynamic = False

    if is_obfuscated:
        print("➡️ Mã rối: Chuyển thẳng sang phân tích động.")
        run_dynamic = True
    else:
        # Step 4: Static Classifier
        print("\n🔬 [4] Static Classification...")
        try:
            static_result = classify_static(merged_js)
            print(f"Static Classification: {static_result}")
            if static_result.lower() == 'malware':
                print("⚠️ Static xác định là Malware → tiếp tục phân tích động.")
                run_dynamic = True
            elif static_result.lower() == 'benign':
                if any(l.startswith('M') for l in shell_behaviors):
                    print("❗ Static benign nhưng Shell có hành vi nguy hiểm → KẾT LUẬN: MALWARE.")
                    final_labels = set(shell_behaviors)
                    print(f"\n🧠 Tổng hợp nhãn hành vi: {list(final_labels)}")
                    print(f"\n✅ [KẾT LUẬN CUỐI CÙNG] ➤ Gói này là: MALWARE")
                    return
                else:
                    print("✅ Static benign và Shell benign → KẾT LUẬN: BENIGN.")
                    final_labels = set()
                    print(f"\n🧠 Tổng hợp nhãn hành vi: []")
                    print(f"\n✅ [KẾT LUẬN CUỐI CÙNG] ➤ Gói này là: BENIGN")
                    return
        except Exception as e:
            print(f"❌ Lỗi static classifier: {e}")

    # Step 5: Dynamic Execution nếu cần
    if run_dynamic:
        print("\n⚙️ [5] Dynamic Execution...")
        run_dynamic_with_hook(merged_js)
    else:
        print("⏩ Bỏ qua dynamic execution.")

    # Step 6: Hierarchical Classification
    print("\n🏁 [6] Hierarchical Classification...")
    hierarchical_labels = classify_behavior_from_jsonl()
    print(f"🧠 Hierarchical Behaviors: {hierarchical_labels}")

    # Final Decision
    final_labels = set(shell_behaviors + hierarchical_labels)
    print(f"\n🧠 Tổng hợp nhãn hành vi: {list(final_labels)}")
    is_malware = any(l.startswith('M') for l in final_labels)
    verdict = "Malware" if is_malware else "Benign"
    print(f"\n✅ [KẾT LUẬN CUỐI CÙNG] ➤ Gói này là: {verdict.upper()}")

if __name__ == '__main__':
    import sys
    if len(sys.argv) != 2:
        print("❌ Dùng: python3 pipeline.py <đường_dẫn_gói>")
        exit(1)
    run_pipeline(sys.argv[1])
