FROM node:16

ARG DB_STRING
ARG REDIS_STRING

WORKDIR /app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 5000
ENTRYPOINT ["node", "index.js"]