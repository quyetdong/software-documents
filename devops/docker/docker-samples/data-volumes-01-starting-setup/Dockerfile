FROM node:16

COPY package*.json /app/

WORKDIR /app

RUN npm i

COPY . /app

# VOLUME ["/app/feedback"]

ARG DE_PORT=80

ENV PORT $DE_PORT

EXPOSE $PORT

CMD ["npm", "start"]
