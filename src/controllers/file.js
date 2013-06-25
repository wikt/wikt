var fs = require('fs');
var git = require('gift');

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

        var filePath = config.repositoryDirectory + '/' + fileName;

        console.log('Modifying file ' + fileName);

        fs.writeFile(filePath, req.body.content, function(err) {
            if (err) {
                console.error(err);
                return;
            }

            // Git commit
            var repo = git(config.repositoryDirectory);
            repo.add(filePath, function(err) {
                if (err) {
                    console.error(err);
                    return;
                }

                repo.commit("Updated " + fileName, {}, function(err) {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    res.send();
                });
            });
        });
    };

};
