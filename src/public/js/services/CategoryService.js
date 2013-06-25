'use strict';

/**
 * Category service
 */
function CategoryService() {

    CategoryService.prototype.getCurrentItemName = function(path) {
        var parts = path.split('\\');
        if (parts.length > 0) {
            return parts[parts.length - 1];
        }
    }

    CategoryService.prototype.getParentDirectory = function(path) {
        var parentPath = path.split('\\').pop().join('\\');
        return parentPath;
    }

}
