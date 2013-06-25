'use strict';

/**
 * Service for managing categories
 */
function CategoryService($http) {

    /**
     * Returns the items of a category (sub-categories and articles)
     * @param path {string} Category path
     * @returns promise function(items)
     */
    this.getCategoryContent = function(path) {
        return $http.get('directory/' + encodeURIComponent(path));
    };

    this.getCurrentItemName = function(path) {
        return path.split('\\').pop();
    };

    this.getCurrentDirectory = function(path) {
        if (path == '\\') {
            return path;
        } else {
            var slashIndex = path.lastIndexOf('\\');
            return path.substring(0,slashIndex);
        }
    };

    this.getParentDirectory = function(path) {
        if (path == '\\') {
            return path;
        } else {
            var slashIndex = path.lastIndexOf('\\');
            var tempPath = path.substring(0,slashIndex);
            slashIndex = tempPath.lastIndexOf('\\');
            return tempPath.substring(0,slashIndex);
        }
    };

}
