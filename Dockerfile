FROM ubuntu:16.04

RUN apt-get -y update && apt-get -y upgrade && apt-get -y install python nodejs node-express

COPY . /usr/src/technique-notes/

EXPOSE 8080

CMD nodejs /usr/src/technique-notes/server.js
