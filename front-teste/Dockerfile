FROM node:14-slim
COPY package.json ./js
RUN npm install
COPY . /
CMD ["node", "server.js"]