import json
import os

def map_apis_to_behaviors(api_calls):
    mapping = {
        'fs.readFileSync': 'FILE_READ',
        'fs.writeFile': 'FILE_WRITE',
        'fs.writeFileSync': 'FILE_WRITE',
        'child_process.exec': 'PROCESS_COMMAND_EXECUTION',
        'https.request': 'NETWORK_OUT',
        'http.request': 'NETWORK_OUT',
        'os.hostname': 'SYSTEM_INFO_ACCESS'
    }
    return [mapping.get(api, 'UNKNOWN') for api in api_calls]

def classify_behavior_from_jsonl():
    jsonl_path = os.path.join(os.path.dirname(__file__), '../dynamic_log.jsonl')
    try:
        if not os.path.exists(jsonl_path):
            print(f"❌ Không tìm thấy file log: {jsonl_path}")
            return ['Benign']
        with open(jsonl_path, 'r') as f:
            lines = f.readlines()
        if not lines:
            return ['Benign']

        last_entry = json.loads(lines[-1])
        api = last_entry.get('api', '')
        args = last_entry.get('args', [])
        behavior = map_apis_to_behaviors([api])[0]
    except Exception as e:
        print(f"⚠️ Lỗi khi đọc dynamic_log.jsonl: {e}")
        return ['Benign']

    categories = set()

    if behavior == 'SYSTEM_INFO_ACCESS':
        categories.add('M1_sensitive_info_theft')

    if behavior in ['FILE_READ', 'FILE_WRITE']:
        categories.add('M2_sensitive_file_ops')

    if behavior == 'PROCESS_COMMAND_EXECUTION':
        cmd_text = ' '.join(str(a) for a in args if a is not None)
        if any(k in cmd_text for k in ['curl', 'wget', 'http']):
            categories.add('M3_malicious_software_import')
        if any(k in cmd_text for k in ['hostname', 'whoami']):
            categories.add('M4_reverse_shell')
        else:
            categories.add('M5_suspicious_command_exec')

    if not categories:
        categories.add('Benign')

    return list(categories)

if __name__ == '__main__':
    result = classify_behavior_from_jsonl()
    print(f"🧠 Phân loại hành vi: {result}")
