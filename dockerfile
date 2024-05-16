FROM node:14
WORKDIR /public
COPY package*. json./
RUN npm install express
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]