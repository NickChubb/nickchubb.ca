FROM node:latest

# Setting timezone
ENV TZ=America/Vancouver
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/app
ENV PATH /app/node_modules/.bin:$PATH

VOLUME ["/usr/src/app/data"]

COPY package*.json ./
#COPY yarn.lock ./
#RUN yarn install

RUN npm i

COPY . .

#RUN yarn build
RUN npm run build
CMD ["node", "--experimental-json-modules", "gatsby-node.js"]

