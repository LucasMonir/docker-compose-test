FROM node:14-slim
COPY package.json ./
RUN npm install
COPY . /
CMD ["node", "server.js"]
