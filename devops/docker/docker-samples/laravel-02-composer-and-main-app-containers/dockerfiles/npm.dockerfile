FROM node:16

WORKDIR /var/www/html

COPY ./src .

ENTRYPOINT [ "npm" ]
