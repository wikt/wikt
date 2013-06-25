'use strict';

/**
 * Service for managing articles
 */
function ArticleService($http) {

    /**
     * Returns the content of an article
     * @param path {string} Article path
     * @returns promise function(markdown)
     */
    this.getArticleContent = function(path) {
        return $http.get('file/' + encodeURIComponent(path));
    };

    /**
     * Update the content of an article
     * @param path {string} Article path
     * @param content {string} Article markdown content
     * @returns promise
     */
    this.setArticleContent = function(path, content) {
        console.log('Setting article content for ' + path);
        console.log(content);
        return $http.post('file/' + encodeURIComponent(path), {content: content});
    };

}
