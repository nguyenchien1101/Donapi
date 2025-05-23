from flask import Flask, request, render_template
import os
import tempfile
from pipeline import donapi_pipeline

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    files = request.files.getlist('files')
    if not files:
        return "Không có file nào được tải lên", 400

    with tempfile.TemporaryDirectory() as tmpdir:
        for file in files:
            save_path = os.path.join(tmpdir, file.filename)
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            file.save(save_path)

        result = donapi_pipeline(tmpdir)
        return render_template("result.html", log_output=result)

if __name__ == '__main__':
    app.run(debug=True)
