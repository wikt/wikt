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
            $scope.markdown = markdown;
            var converter = new Showdown.converter();
            $scope.html = converter.makeHtml(markdown);
        });
    };

    $scope.getMarkdown();
}
