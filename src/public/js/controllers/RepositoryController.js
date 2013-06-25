'use strict';

/* Repository Controller */
angular.module('wikt.controllers', []).controller('RepositoryController', RepositoryController);

function RepositoryController ($scope, $http) {
    $scope.getPathContent = function(path) {
        $scope.directories = [];
        $scope.files = [];

        $http.get('directory/' + path).success(function(items) {
            items.forEach(function(item) {
                item.directory == true ? $scope.directories.push(item) : $scope.files.push(item);
            });
        });
    }

    $scope.getPathContent('');
};