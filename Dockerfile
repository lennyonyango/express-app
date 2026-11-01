FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm install

EXPOSE 8000
CMD ["node", "index.js"]
