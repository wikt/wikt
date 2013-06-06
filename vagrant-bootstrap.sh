#!/bin/bash

apt-get install -y build-essential cmake python git curl

# Install Node Version Manager
su vagrant -c "curl https://raw.github.com/creationix/nvm/master/install.sh | sh && . ~/.nvm/nvm.sh && nvm install v0.8  && nvm alias default 0.8"
