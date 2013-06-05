'use strict';

/* Controllers */

angular.module('wikt.controllers', []).controller('DocumentController');

function DocumentController($scope, $routeParams, $http) {

    var path = $routeParams.path;

    $scope.fileName = path ? path : 'Home';

    $scope.getMarkdown = function() {
        $http.get('file/' + path).success(function(markdown) {
            $scope.markdown = markdown;
            var converter = new Showdown.converter();
            $scope.html = converter.makeHtml(markdown);
        });
    };

    $scope.getMarkdown();
};