FROM node:16
   WORKDIR /app
   # Cài Python và pip
   RUN apt-get update && apt-get install -y python3 python3-pip
   COPY . .
   # Cài bashlex bằng pip
   RUN pip3 install bashlex
   CMD ["python3", "pipeline.py"]
