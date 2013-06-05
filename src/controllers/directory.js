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
        var dirName = req.params.name;

        if (!dirName) {
            dirName = '';
        }

        if (!dirName || dirName == 'undefined') {
            dirName = '';
        }

        console.log("Listing directory '" + dirName + "'");

        // Read directory content
        fs.readdir(config.repositoryDirectory + '/' + dirName, function(err, files) {
            if (err) {
                console.error(err);
                return;
            }

            var result = {};

            // For each file
            for (var i = 0; i < files.length; i++) {
                file = files[i];

                // Ignore hidden files
                if (file.length > 0 && file[0] == '.') {
                    continue;
                }

                result[file] = {
                    name: file
                };
            }

            res.send(result);
        });
    };

};
