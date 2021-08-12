FROM node:12-alpine3.11

WORKDIR /src/

COPY  . .

RUN npm install

ENV PORT=3033

EXPOSE 3033

CMD ["node", "index.js"]