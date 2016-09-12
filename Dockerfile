## Main
## ENV APP /usr/src/app
## RUN mkdir -p ${APP}/
## WORKDIR ${APP}/
## ADD ./ ./
## ADD ./docker/ /docker
## RUN chmod +x /docker/*.sh
RUN npm install

## Clean Garbage
## RUN npm cache clean
## RUN apt-get clean 
## RUN rm -rf /var/lib/apt/lists/*

EXPOSE 3000
## CMD ["/docker/run.sh"]