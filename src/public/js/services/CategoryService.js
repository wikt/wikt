'use strict';

/**
 * Category service
 */
function CategoryService() {

    CategoryService.prototype.getCurrentItemName = function(path) {
        return path.split('\\').pop();
    }

    CategoryService.prototype.getParentDirectory = function(path) {
        if (path == '\\') {
            return path;
        } else {
            var slashIndex = path.lastIndexOf('\\');
            return path.substring(0,slashIndex);
        }
    }

}
