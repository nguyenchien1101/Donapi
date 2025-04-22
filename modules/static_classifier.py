import json
import sys
from sklearn.ensemble import RandomForestClassifier
import pandas as pd

def train_static_model():
    data = pd.read_csv('datasets/static_api.csv')
    X = data[['network_requests', 'file_operations', 'process_operations', 'eval_usage']]
    y = data['label']
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)
    return model

def classify_static(features):
    model = train_static_model()
    df = pd.DataFrame([features])
    prediction = model.predict(df[['network_requests', 'file_operations', 'process_operations', 'eval_usage']])[0]
    return {'suspicious': bool(prediction)}

if __name__ == '__main__':
    features = json.loads(sys.argv[1])
    print(json.dumps(classify_static(features)))
