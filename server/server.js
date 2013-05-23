// Configuration
var repositoryDirectory = '../test/wiki-test';

var git = require('gift');
var fs = require('fs');

var repo = git(repositoryDirectory);

// REST server
var restify = require('restify');

/**
 * File controller
 * @constructor
 */
var FileController = function() {
    /**
     * GET
     */
    this.get = function(req, res, next) {
        console.log('Sending file ' + req.params.name);

        fs.readFile(repositoryDirectory + '/' + req.params.name, 'utf8', function(err, data) {
            if (err) throw err;

            res.send('hello ' + data);
        });
    }
};
var fileController = new FileController();

var server = restify.createServer();
server.get('/file/:name', fileController.get);

server.listen(12639, function() {
    console.log('%s listening at %s', server.name, server.url);
});
