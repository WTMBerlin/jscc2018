FROM node:8-alpine

WORKDIR /app

ADD . ./
RUN npm install

EXPOSE 8080
CMD npm run serve -- --host 0.0.0.0
