FROM node

WORKDIR /app

# Copy all the files starts with Package
COPY package*.json .
RUN npm install

# Copy all the files

COPY . .


CMD [ "node", "server.js" ]