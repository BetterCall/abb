#! /bin/bash

yarn build:server
docker build -t deless/abb:latest .
docker push deless/abb:latest

ssh root@68.183.46.7 "docker pull deless/abb:latest && docker tag deless/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"
