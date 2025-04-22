FROM node:16 RUN npm install -g npm

Giả lập Node.js instrumented

COPY ./instrumented-node /usr/local/bin/node CMD ["/bin/bash"]
