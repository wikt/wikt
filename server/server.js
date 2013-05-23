var config = require('./config');
var git = require('gift');
var fs = require('fs');

var repo = git(config.repositoryDirectory);

// REST server
var restify = require('restify');
var server = restify.createServer();

// DirectoryController
var DirectoryController = require('./controllers/file');
var directoryController = new DirectoryController(config);
server.get('/directory/:name', directoryController.get);

// FileController
var FileController = require('./controllers/file');
var fileController = new FileController(config);
server.get('/file/:name', fileController.get);
server.post('/file/:name', fileController.post);

server.listen(12639, function() {
    console.log('%s listening at %s', server.name, server.url);
});
