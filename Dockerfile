FROM node:18-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3042

CMD ["npm", "run", "start"]