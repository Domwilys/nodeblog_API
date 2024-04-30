FROM node:21.6.0
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8586
CMD ["npm", "start"]