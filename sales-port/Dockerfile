FROM node:14.15.4-alpine3.12

# Dependencies for chrome
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \ 
    apk add --no-cache curl jq python3 py3-pip && \
    apk add --no-cache \
      yarn \
      bash \
      git \
      openssh \
      build-base \
      gcc \
      wget


# Creating App Directory
RUN mkdir /sales-port
WORKDIR /sales-port

# Installing app dependencies
RUN yarn global add @angular/cli@11.2.14 pm2
COPY package.json /sales-port
RUN yarn install

# Bundle App Source
COPY . /sales-port

RUN ng build --configuration=production --aot=true --build-optimizer=true --optimization=true

EXPOSE 3002

ENV NODE_ENV development

COPY ./run.sh /sales-port


RUN ["chmod", "+x", "/sales-port/run.sh"]

ENTRYPOINT ["sh","/sales-port/run.sh"]
