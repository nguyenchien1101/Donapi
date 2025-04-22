import re
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import numpy as np

def extract_obfuscation_features(code):
    features = {
        'code_length': len(code),
        'avg_var_length': sum(len(word) for word in re.findall(r'\b\w+\b', code)) / max(1, len(re.findall(r'\b\w+\b', code))),
        'non_ascii_count': sum(1 for c in code if ord(c) > 127),
        'hex_encoded': len(re.findall(r'\\x[0-9a-fA-F]{2}', code)),
        'string_entropy': -sum((code.count(c) / len(code)) * np.log2(code.count(c) / len(code)) for c in set(code) if code.count(c) > 0)
    }
    return features

def train_obfuscation_model():
    data = pd.read_csv('datasets/obfuscation.csv')
    X = data[['code_length', 'avg_var_length', 'non_ascii_count', 'hex_encoded', 'string_entropy']]
    y = data['label']
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)
    return model

def detect_obfuscation(code_path):
    try:
        code = open(code_path, 'r', encoding='utf-8').read()
        features = extract_obfuscation_features(code)
        df = pd.DataFrame([features])
        model = train_obfuscation_model()
        prediction = model.predict(df[['code_length', 'avg_var_length', 'non_ascii_count', 'hex_encoded', 'string_entropy']])[0]
        return bool(prediction)
    except Exception as e:
        print(f"Error detecting obfuscation: {e}")
        return False
