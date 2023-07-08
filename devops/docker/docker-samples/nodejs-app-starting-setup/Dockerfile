FROM node:16-alpine

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . /app

# EXPOSE is optional, it is just for documentation purpose but is recommended
# the required part is expose the port with -p when running docker run to listening on a port
ENV PORT 3000

EXPOSE $PORT

CMD [ "node", "server.js" ]
