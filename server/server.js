// Configuration
var repositoryDirectory = '../test/wiki-test';

var git = require('gift');
var fs = require('fs');

var repo = git(repositoryDirectory);

// REST server
var restify = require('restify');

var server = restify.createServer();

/**
 * File controller
 * @constructor
 */
var FileController = function() {
    /**
     * GET: returns file content
     */
    this.get = function(req, res, next) {
        console.log('Sending file ' + req.params.name);

        fs.readFile(repositoryDirectory + '/' + req.params.name, 'utf8', function(err, data) {
            if (err) throw err;

            res.send('hello ' + data);
        });
    };
    /**
     * POST: edit file content
     */
    this.post = function(req, res, next) {
        console.log('Modifying file ' + req.params.name);

        fs.writeFile(repositoryDirectory + '/' + req.params.name, req.params.content, function(err) {
            if (err) throw err;
        });
    };
};
var fileController = new FileController();
server.get('/file/:name', fileController.get);
server.post('/file/:name', fileController.post);

server.listen(12639, function() {
    console.log('%s listening at %s', server.name, server.url);
});
