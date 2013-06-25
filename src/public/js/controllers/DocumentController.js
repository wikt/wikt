'use strict';

/* Document Controller */
angular.module('wikt.controllers', []).controller('DocumentController', DocumentController);

function DocumentController($scope, $stateParams, $http) {

    var path = $stateParams.path ? $stateParams.path : '';
    var fileName;

    var parts = path.split('\\');

    if (parts.length > 0) {
        fileName = parts[parts.length - 1];
    }

    $scope.fileName = fileName;

    $scope.getMarkdown = function() {
        $http.get('file/' + encodeURIComponent(path)).success(function(markdown) {
            var converter = new Showdown.converter();
            var html = converter.makeHtml(markdown);

            // Fix relative links for Angular -> prepend /#/
            html = html.replace(/href="(((?!:\/\/)[^"])*)"/g, 'href="/#/$1"');

            $scope.markdown = markdown;
            $scope.html = html;
        });
    };

    $scope.getMarkdown();
}
