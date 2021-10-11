FROM node:14.18.0

WORKDIR /src/app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
