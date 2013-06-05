#!/bin/bash

apt-get install -y build-essential cmake python git curl

# Install Node Version Manager
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
. ~/.nvm/nvm.sh

# Install Node.js 0.8
nvm install v0.8

# Ugly trick
chmod -R 777 /root
echo ". /root/.nvm/nvm.sh" >> /home/vagrant/.profile

nvm alias default 0.8
