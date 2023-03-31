FROM node:18.15-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --omit=dev --ignore-scripts
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "node", "./build/index.js" ]
