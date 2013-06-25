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
        var parts = path.split('\\');
        if (parts.length > 0) {
            return parts[parts.length - 1];
        }
    };

    this.getParentDirectory = function(path) {
        return path.split('\\').pop().join('\\');
    };

}
