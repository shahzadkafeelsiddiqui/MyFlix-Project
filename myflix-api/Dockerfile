FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .



RUN npm install

COPY . .

EXPOSE 27017

CMD ["npm", "start"]