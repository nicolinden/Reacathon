FROM node:18-buster

RUN wget "https://packages.cloudfoundry.org/stable?release=debian64&version=v8&source=github" -O /tmp/cf8-install.deb
RUN dpkg -i /tmp/cf8-install.deb
RUN cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
RUN cf install-plugin multiapps -f

RUN apt-get update && apt-get install -y vim
RUN npm install -g typescript nodemon mbt
RUN mkdir /app
WORKDIR /app

EXPOSE 3000



