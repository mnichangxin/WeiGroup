FROM node:4.1.1

RUN npm install
RUN npm client-start
RUN npm start

EXPOSE 3000
