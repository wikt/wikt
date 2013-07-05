var config = require('./src/config');
var git = require('gift');
var fs = require('fs');

var repo = git(config.repositoryDirectory);

// Server
var express = require('express');
var app = express();
app.use(express.bodyParser());

//app.use(express.logger());

// DirectoryController
var DirectoryController = require('./src/controllers/directory');
var directoryController = new DirectoryController(config);
app.get('/directory/:name?', directoryController.get);

// FileController
var FileController = require('./src/controllers/file');
var fileController = new FileController(config);
app.get('/file/:name?', fileController.get);
app.post('/file/:name?', fileController.post);


// Serve static files of the JS app
app.use('/', express.static(__dirname + '/src/public'));

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log("Listening on port " + port);
});
