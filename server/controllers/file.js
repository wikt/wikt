var fs = require('fs');

/**
 * File controller
 * @param config
 */
module.exports = function(config) {

    /**
     * GET: returns file content
     */
    this.get = function(req, res, next) {
        console.log('Sending file ' + req.params.name);

        fs.readFile(config.repositoryDirectory + '/' + req.params.name, 'utf8', function(err, data) {
            if (err) throw err;

            res.send(data);
        });
    };

    /**
     * POST: edit file content
     */
    this.post = function(req, res, next) {
        console.log('Modifying file ' + req.params.name);

        fs.writeFile(config.repositoryDirectory + '/' + req.params.name, req.params.content, function(err) {
            if (err) throw err;
        });
    };

};
