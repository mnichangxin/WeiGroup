FROM node:4.4.4
MAINTAINER zsx <zsx@zsxsoft.com>

#Main
ENV APP /usr/src/app
RUN mkdir -p ${APP}/
WORKDIR ${APP}/
ADD ./ ./
ADD ./docker/ /docker
RUN chmod +x /docker/*.sh
RUN npm install
# RUN npm client-start


EXPOSE 3000
CMD ["/docker/run.sh"]
