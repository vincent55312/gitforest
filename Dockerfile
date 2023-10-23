FROM node:16-alpine

COPY . .

RUN npm install --omit=dev

RUN npm run build

RUN npm install -g serve

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
