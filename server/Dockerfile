FROM node:lts-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install knex

EXPOSE 3030

CMD [ "npm", "start"]