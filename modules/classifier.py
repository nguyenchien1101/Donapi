from sklearn.ensemble import RandomForestClassifier
import pandas as pd

def load_behavior_knowledge():
    return {
        'M1': ['http.request', 'https.request', 'crypto.encrypt'],
        'M2': ['fs.writeFile', 'fs.readFile', 'fs.fchown'],
        'M3': ['child_process.spawn', 'child_process.fork'],
        'M4': ['net.connect', 'net.createConnection'],
        'M5': ['child_process.exec', 'child_process.execSync']
    }

def extract_behavior_features(api_calls):
    knowledge = load_behavior_knowledge()
    features = {
        'M1_count': sum(1 for call in api_calls if isinstance(call, dict) and call.get('api') in knowledge['M1'] or call in knowledge['M1']),
        'M2_count': sum(1 for call in api_calls if isinstance(call, dict) and call.get('api') in knowledge['M2'] or call in knowledge['M2']),
        'M3_count': sum(1 for call in api_calls if isinstance(call, dict) and call.get('api') in knowledge['M3'] or call in knowledge['M3']),
        'M4_count': sum(1 for call in api_calls if isinstance(call, dict) and call.get('api') in knowledge['M4'] or call in knowledge['M4']),
        'M5_count': sum(1 for call in api_calls if isinstance(call, dict) and call.get('api') in knowledge['M5'] or call in knowledge['M5'])
    }
    return features

def train_classifier():
    data = pd.read_csv('datasets/behavior.csv')
    X = data[['M1_count', 'M2_count', 'M3_count', 'M4_count', 'M5_count']]
    y = data['label']
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)
    return model

def classify_behavior(api_calls):
    try:
        features = extract_behavior_features(api_calls)
        df = pd.DataFrame([features])
        model = train_classifier()
        prediction = model.predict(df[['M1_count', 'M2_count', 'M3_count', 'M4_count', 'M5_count']])[0]
        return prediction
    except Exception as e:
        print(f"Error in classification: ${e}")
        return 'Benign'
