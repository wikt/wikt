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
        var fileName = req.params.name;

        if (!fileName || fileName == 'undefined') {
            fileName = 'README.md';
        }

        // If it's a directory
        var stat = fs.statSync(config.repositoryDirectory + '/' + fileName);
        if (stat.isDirectory()) {
            fileName += '/README.md';
        }

        console.log('Sending file ' + fileName);

        fs.readFile(config.repositoryDirectory + '/' + fileName, 'utf8', function(err, data) {
            if (err) {
                console.error(err);
                return;
            }

            res.send(data);
        });
    };

    /**
     * POST: edit file content
     */
    this.post = function(req, res, next) {
        var fileName = req.params.name;

        if (!fileName || fileName == 'undefined') {
            fileName = 'README.md';
        }

        console.log('Modifying file ' + fileName);

        fs.writeFile(config.repositoryDirectory + '/' + fileName, req.body.content, function(err) {
            if (err) {
                console.error(err);
                return;
            }

            res.send();
        });
    };

};
