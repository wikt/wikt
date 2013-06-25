'use strict';

/**
 * Service for managing Markdown documents
 */
function DocumentService($http) {

    /**
     * Returns the content of a document
     * @param path {string} Document path
     * @returns promise function(markdown)
     */
    this.getDocumentContent = function(path) {
        return $http.get('file/' + encodeURIComponent(path));
    };

    /**
     *
     * @param path {string} Document path
     * @param content {string}
     * @returns promise
     */
    this.setDocumentContent = function(path, content) {
        console.log('Setting document content for ' + path);
        console.log(content);
        return $http.post('file/' + encodeURIComponent(path), {content: content});
    };

}
