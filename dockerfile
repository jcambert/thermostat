FROM nodered/node-red-docker
MAINTAINER Jean-Christophe AMBERT

RUN npm install node-red-dashboard node-red-node-google node-red-contrib-google node-red-contrib-google-home-notify