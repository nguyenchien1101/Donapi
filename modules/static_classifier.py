import pandas as pd
import os
from sklearn.ensemble import RandomForestClassifier

def train_static_model():
       data = pd.read_csv('~/hocmay/donapi/datasets/static_api.csv')
       # Pivot để tạo cột cho từng API
       pivot_data = data.pivot_table(index=['package_name', 'label'], columns='api', values='count', fill_value=0)
       pivot_data = pivot_data.reset_index()
       X = pivot_data.drop(['package_name', 'label'], axis=1)
       y = pivot_data['label']
       model = RandomForestClassifier()
       model.fit(X, y)
       return model, X.columns

def classify_static(package_path):
       package_path = os.path.expanduser(package_path)
       package_name = os.path.basename(package_path)
       model, feature_names = train_static_model()
       data = pd.read_csv('~/hocmay/donapi/datasets/static_api.csv')
       package_data = data[data['package_name'] == package_name]
       if package_data.empty:
           return 'Benign'  # Mặc định nếu không có dữ liệu
       pivot_data = package_data.pivot_table(index='package_name', columns='api', values='count', fill_value=0)
       X = pivot_data.reindex(columns=feature_names, fill_value=0)
       prediction = model.predict(X)
       if prediction[0] == 1:
           return 'M1'  # Malware cấp 1
       return 'Benign'
