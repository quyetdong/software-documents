FROM node:16

COPY package*.json /app/

WORKDIR /app

RUN npm install

COPY . /app

ENV PORT 80
ENV DB_SERVER mongodb
ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD secret

EXPOSE $PORT

CMD [ "npm", "start" ]
