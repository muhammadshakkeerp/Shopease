FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .


RUN npm run build


EXPOSE 5173

CMD ["npm", "run", "dev"]
