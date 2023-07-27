FROM node:16

COPY package*.json /app/

WORKDIR /app

RUN npm install

COPY . /app

ENV PORT 80
ENV HTTPS false
ENV REACT_APP_BE_DOMAIN localhost

EXPOSE $PORT

CMD [ "npm", "start" ]
