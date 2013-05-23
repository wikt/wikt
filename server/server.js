var config = require('./config');
var git = require('gift');
var fs = require('fs');

var repo = git(config.repositoryDirectory);

// REST server
var restify = require('restify');
var server = restify.createServer();

var FileController = require('./controllers/file');
var fileController = new FileController(config);
server.get('/file/:name', fileController.get);
server.post('/file/:name', fileController.post);

server.listen(12639, function() {
    console.log('%s listening at %s', server.name, server.url);
});
