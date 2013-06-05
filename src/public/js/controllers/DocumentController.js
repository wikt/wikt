'use strict';

/* Controllers */

angular.module('wikt.controllers', []).
controller('DocumentController', function ($scope, $routeParams, $http) {
    $scope.getSample = function() {
        $http.get('file/' + $routeParams.path).success(function(markdown) {
            $scope.markdown = markdown;
            var converter = new Showdown.converter();
            $scope.html = converter.makeHtml(markdown);
        });
    };

    $scope.getSample();
});