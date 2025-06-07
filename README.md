# DONAPI: Malicious NPM Packages Detector using Behavior Sequence Knowledge Mapping

## 🛡️ Giới thiệu

**DONAPI** là một hệ thống phát hiện và phân loại các gói npm độc hại bằng cách phân tích hành vi qua cả hai phương pháp **phân tích tĩnh và động**. Hệ thống sử dụng cơ sở kiến thức hành vi (behavior sequence knowledge) để gán nhãn chính xác các loại mã độc phổ biến trong chuỗi cung ứng phần mềm nguồn mở.

## ⚙️ Kiến trúc hệ thống

DONAPI gồm 6 mô-đun chính:

1. **Code Dependencies Reconstructor**  
   → Tái tạo phụ thuộc bằng AST, gộp code vào một file duy nhất.

2. **Malicious Shell Command Detector**  
   → Phát hiện shell độc hại từ `package.json`, `.sh` hoặc `child_process.exec`.

3. **Obfuscated Code Detector**  
   → Dùng Random Forest để nhận biết mã bị rối dựa trên 25 đặc trưng.

4. **Suspicious Package Static Identifier (SPSI)**  
   → Trích xuất API call và gán nhãn sơ bộ qua phân tích tĩnh.

5. **Dynamic Behavior Extractor**  
   → Gắn hook vào 132 API Node.js, chạy package trong Docker và thu thập hành vi thực thi.

6. **Hierarchical Classifier**  
   → Gán nhãn gói vào 5 loại mã độc:  
      - M1: Trộm cắp thông tin nhạy cảm  
      - M2: Thao tác file nhạy cảm  
      - M3: Nhập khẩu phần mềm độc hại  
      - M4: Reverse shell  
      - M5: Thực thi lệnh đáng ngờ

## 🚀 Cách sử dụng

### 📦 Chạy bằng dòng lệnh (CLI mode)

```bash
python3 pipeline.py /path/to/npm/package
```
### 🌐 Chạy bằng giao diện web (Web UI) 
```bash
python3 app.py
```
- Truy cập: http://localhost:5000
- Cho phép upload gói npm, xem log và nhận kết quả gán nhãn mã độc.
### 📂 Cài đặt
```bash
git clone https://github.com/nguyenchien1101/Donapi.git
cd Donapi
pip install -r requirements.txt
```
## 📚 Tài liệu tham khảo
- [USENIX Security 2024 – DONAPI Paper](https://www.usenix.org/conference/usenixsecurity24/presentation/huang-cheng)
- [DONAPI Behavior Knowledge Base](https://das-lab.github.io/Donapi/)
## ⚠️ Legal & Attribution Disclaimer
This project is a **reimplementation** of the ideas presented in the paper:
> **Huang et al.**  
> *DONAPI: Malicious NPM Packages Detector using Behavior Sequence Knowledge Mapping*  
> USENIX Security Symposium 2024  
> [Link to paper](https://www.usenix.org/conference/usenixsecurity24/presentation/huang-cheng)
- 🔍 This repository **does not reuse or redistribute any official code, models, datasets, or private tools** from the original authors.
- ✍️ All implementations (e.g., code reconstruction, detectors, classifiers) are **written independently** based on descriptions and diagrams from the paper.
- 🎓 This work is provided **solely for academic and educational purposes**. It is not affiliated with or endorsed by the original authors or USENIX.
If you are one of the original authors and have concerns, please contact us so we can promptly respond or revise this project.



