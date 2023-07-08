FROM node:16

COPY package*.json /app/

WORKDIR /app

# RUN npm install

COPY . /app/

EXPOSE $PORT

ENTRYPOINT [ "npm" ]
CMD ["start"]
