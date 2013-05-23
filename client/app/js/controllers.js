'use strict';

/* Controllers */

angular.module('wikt.controllers', ['ng']).
    controller('DocumentController', [function ($scope, $ng) {
        $scope.getSample = function() {
            $ng.http({method: 'GET', url: 'http://localhost:12639/file/README.md'})
                .success(function (data, status, headers, config) {
                    $scope.documentContent = data;
                    $scope.view = './views/document/sample'
                })
                .error(function (data, status, headers, config) {
                    console.log("crap, that failed");
                });
        }
}]);