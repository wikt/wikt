var config = require('./config');
var git = require('gift');
var fs = require('fs');

var repo = git(config.repositoryDirectory);

// Server
var express = require('express');
var app = express();

//app.use(express.logger());

// DirectoryController
var DirectoryController = require('./controllers/directory');
var directoryController = new DirectoryController(config);
app.get('/directory/:name?', directoryController.get);

// FileController
var FileController = require('./controllers/file');
var fileController = new FileController(config);
app.get('/file/:name?', fileController.get);
app.post('/file/:name?', fileController.post);


// Serve static files of the JS app
app.use('/', express.static(__dirname + '/public'));

app.listen(8080, function() {
    console.log("Listening on port 8080");
});
