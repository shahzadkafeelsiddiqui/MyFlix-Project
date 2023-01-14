# FROM node:17-alpine as builder
FROM node:16.15.1 as build
WORKDIR /app
COPY package.json .



RUN npm install

COPY . .

EXPOSE 27017

CMD ["npm", "start"]