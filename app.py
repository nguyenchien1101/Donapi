import os
import shutil
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = 'uploaded_packages'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect', methods=['POST'])
def detect():
    if 'files' not in request.files:
        return "Không có file nào được chọn."

    files = request.files.getlist('files')
    if not files:
        return "Chưa chọn thư mục."

    # Lấy thư mục gốc từ đường dẫn của file đầu tiên
    relative_root = os.path.commonpath([f.filename for f in files])
    package_root = os.path.join(app.config['UPLOAD_FOLDER'], relative_root)
    os.makedirs(package_root, exist_ok=True)

    for f in files:
        save_path = os.path.join(app.config['UPLOAD_FOLDER'], f.filename)
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        f.save(save_path)

    # Chạy pipeline
    result = os.popen(f'python3 pipeline.py "{package_root}"').read()

    # Phân tích kết luận cuối cùng
    verdict = "Benign"
    for line in result.splitlines():
        if "KẾT LUẬN CUỐI CÙNG" in line:
            verdict = "Malware" if "MALWARE" in line.upper() else "Benign"
            break

    return render_template('result.html', result=result, verdict=verdict)

if __name__ == '__main__':
    app.run(debug=True)
