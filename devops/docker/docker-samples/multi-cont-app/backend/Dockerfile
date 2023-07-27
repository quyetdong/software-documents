FROM node:16-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
# RUN echo NODE_ENV ${NODE_ENV}

COPY package*.json /app/

WORKDIR /app

RUN npm install

COPY . /app

ENV PORT 80
ENV DB_CONNECTION mongodb://root:secret@mongodb/course-goals?authSource=admin

EXPOSE $PORT

CMD [ "npm", "run", "start-prod" ]
