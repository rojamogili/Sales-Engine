#!/bin/bash
if [ "$NODE_ENV" = "development" ]
then
  nohup ng build --watch &
  pm2-docker start pm2-config/development.json
  sleep 100000
elif [ "$NODE_ENV" = "production" ]
then
  pm2-docker start pm2-config/production.json
fi

exec "$@"
