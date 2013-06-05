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

        dirName = config.repositoryDirectory + '/' + dirName;

        console.log("Listing directory '" + dirName + "'");

        // Read directory content
        fs.readdir(dirName, function(err, files) {
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

                // Check file type
                var stat = fs.statSync(dirName + '/' + file);

                result[file] = {
                    name: file,
                    directory: stat.isDirectory()
                };
            }

            res.send(result);
        });
    };

};
