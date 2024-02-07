FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm install -g vite

RUN npm run build

FROM node:alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --only=production

EXPOSE 5173

CMD ["npm", "run", "dev"]
