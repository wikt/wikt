// Configuration
var repositoryDirectory = '../test/wiki-test';

var git = require('gift');
var fs = require('fs');

var repo = git(repositoryDirectory);

// REST server
var restify = require('restify');

function respond(req, res, next) {
    console.log('Sending file ' + req.params.name);

    fs.readFile(repositoryDirectory + '/' + req.params.name, 'utf8', function(err, data) {
        if (err) throw err;

        res.send('hello ' + data);
    });
}

var server = restify.createServer();
server.get('/file/:name', respond);

server.listen(12639, function() {
    console.log('%s listening at %s', server.name, server.url);
});
