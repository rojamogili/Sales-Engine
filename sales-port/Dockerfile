FROM node:14.15.4-alpine3.12

RUN mkdir /sales-port
WORKDIR /sales-port

RUN yarn global add @angular/cli@11.2.14
COPY package.json /sales-port
RUN yarn install

COPY . /sales-port

RUN ng build --configuration=production --aot=true --build-optimizer=true --optimization=true

CMD "ng" "serve" 