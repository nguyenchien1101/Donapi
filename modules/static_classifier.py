import sys
import re
import os
import joblib
import warnings
warnings.filterwarnings("ignore", category=UserWarning)

# ======= Nhóm API tĩnh nghi ngờ =======
SUSPICIOUS_APIS = {
    "http": ["http", "https", "axios", "request", "fetch"],
    "fs": ["fs", "fs/promises", "readFile", "writeFile"],
    "process": ["child_process", "process", "spawn", "exec"],
    "exec": ["eval", "Function", "vm", "require('vm')"]
}

def count_api_groups(js_code):
    counts = {key: 0 for key in SUSPICIOUS_APIS}
    for group, keywords in SUSPICIOUS_APIS.items():
        for keyword in keywords:
            pattern = re.compile(rf"[^a-zA-Z0-9_]{re.escape(keyword)}[^a-zA-Z0-9_]")
            matches = pattern.findall(js_code)
            counts[group] += len(matches)
    return counts

def main():
    if len(sys.argv) < 2:
        print("❌ Cách dùng: python3 static.py <path-to-merged.js>")
        sys.exit(1)

    js_path = sys.argv[1]

    if not os.path.isfile(js_path):
        print(f"❌ Không tìm thấy file: {js_path}")
        sys.exit(1)

    # Load model
    model_path = os.path.join(os.path.dirname(__file__), "../model/spsi_model.pkl")
    model = joblib.load(model_path)

    # Đọc nội dung JS và trích đặc trưng
    with open(js_path, "r", encoding="utf-8", errors="ignore") as f:
        js_code = f.read()

    features = count_api_groups(js_code)
    X = [[features['http'], features['fs'], features['process'], features['exec']]]

    # Dự đoán
    prediction = model.predict(X)[0]
    label = "Malware" if prediction == 1 else "Benign"

    print(f"🔍 Kết quả phân tích static: {label}")

if __name__ == "__main__":
    main()
def classify_static(js_path):
    if not os.path.isfile(js_path):
        raise FileNotFoundError(f"Không tìm thấy file: {js_path}")

    model_path = os.path.join(os.path.dirname(__file__), "../model/spsi_model.pkl")
    model = joblib.load(model_path)

    with open(js_path, "r", encoding="utf-8", errors="ignore") as f:
        js_code = f.read()

    features = count_api_groups(js_code)
    X = [[features['http'], features['fs'], features['process'], features['exec']]]

    prediction = model.predict(X)[0]
    label = "Malware" if prediction == 1 else "Benign"
    return label

