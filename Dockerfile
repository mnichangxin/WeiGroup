FROM node:6.2.1
MAINTAINER <mnichangxin@163.com>

ENV APP /usr/src/app
RUN mkdir -p ${APP}/
WORKDIR ${APP}/
ADD ./ ./
ADD ./docker/ /docker
RUN chmod +x /docker/*.sh
RUN npm install

EXPOSE 3000
CMD ["/docker/run.sh"]
