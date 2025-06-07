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


