FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 80

CMD ["npm", "start"]