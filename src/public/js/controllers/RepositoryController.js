'use strict';

/* Repository Controller */

angular.module('wikt.controllers', []).controller('RepositoryController');

function RepositoryController ($scope, $http) {
    $scope.getPathContent = function(path) {
        $http.get('directory/:path', {path: path}).success(function(data) {

        });
    }
};