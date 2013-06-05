var fs = require('fs');

/**
 * Directory controller
 * @param config
 */
module.exports = function(config) {

    /**
     * GET: returns directory content (file and folder names list)
     */
    this.get = function(req, res, next) {
        console.log('Listing directory ' + req.params.name);

        fs.readdir(config.repositoryDirectory + '/' + req.params.name, function(err, files) {
            if (err) throw err;

            res.send(files);
        });
    };

};
