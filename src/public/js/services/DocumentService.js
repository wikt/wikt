'use strict';

/**
 * Service for managing Markdown documents
 */
function DocumentService($http) {
    var self = this;

    /**
     * Returns the content of a document
     * @param path {string} Document path
     * @returns promise function(markdown)
     */
    this.getDocumentContent = function(path) {
        return $http.get('file/' + encodeURIComponent(path));
    };

}
