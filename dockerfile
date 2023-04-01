FROM node:18.13.0

WORKDIR /usr/src/app

RUN apt update
RUN apt -y upgrade
RUN apt-get -y install apt-utils npm
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]