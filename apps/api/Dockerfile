FROM node:16-alpine

WORKDIR /app

COPY /dist/apps/api .

EXPOSE 3333

RUN npm install

RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express

CMD [ "node", "main.js" ]