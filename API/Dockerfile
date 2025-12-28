FROM node:20

WORKDIR /express

COPY package.json .

RUN yarn config set network-timeout 30000000

RUN yarn install

COPY . .

EXPOSE 8800

CMD ["yarn", "start:prod"]


#docker build . -t social_api 
#docker run -d -p 8800:8800 --name cons-react social_api 