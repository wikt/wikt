'use strict';

/* Repository Controller */
angular.module('wikt.controllers', []).controller('RepositoryController', RepositoryController);

function RepositoryController ($scope, $http) {
    $scope.getPathContent = function(path) {
        $http.get('directory/' + path).success(function(data) {
            $scope.items = data;
        });
    }

    $scope.getPathContent('');
};