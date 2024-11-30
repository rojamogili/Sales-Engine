FROM node:14.15.4-alpine3.12

RUN mkdir /sales-portal
WORKDIR /sales-portal

RUN yarn global add @angular/cli@11.2.14
COPY package.json /sales-portal
RUN yarn install

COPY . /sales-portal

RUN ng build --configuration=production --aot=true --build-optimizer=true --optimization=true

CMD "ng" "serve" 