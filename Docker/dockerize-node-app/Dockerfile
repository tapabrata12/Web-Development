FROM node

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

# Command Running 

RUN npm install

CMD [ "node", "server.js" ]