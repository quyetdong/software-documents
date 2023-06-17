FROM node:16

COPY package*.json /app/

WORKDIR /app

RUN npm i

COPY . /app

# VOLUME ["/app/feedback"]

ENV PORT 80

EXPOSE $PORT

CMD ["npm", "start"]
