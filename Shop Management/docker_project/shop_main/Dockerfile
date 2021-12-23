FROM node:10

RUN mkdir -p /app

RUN mkdir -p /app/input

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
