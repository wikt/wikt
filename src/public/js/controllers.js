'use strict';

/* Controllers */

angular.module('wikt.controllers', []).
    controller('DocumentController', function ($scope, $http) {
        $scope.getSample = function() {
            $http.get('file/README.md').success(function(data) { $scope.data = data });
        }

        $scope.getSample();
});