FROM node:14.6.0-alpine
ENV PORT 8080
LABEL author="César Delgado" maintainer="cesar.delgado.arcos@gmail.com"

COPY ./ .
RUN npm i npm@latest -g
RUN npm install

CMD ["npm", "start"]