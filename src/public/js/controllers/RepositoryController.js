'use strict';

/* Repository Controller */

function RepositoryController ($scope, $http, $stateParams, repositoryService) {

    var path = $stateParams.path ? $stateParams.path : '';

    $scope.getPathContent = function(path) {
        $scope.directories = [];
        $scope.files = [];

        $http.get('directory' + path).success(function(items) {
            items.forEach(function(item) {
                item.directory == true ? $scope.directories.push(item) : $scope.files.push(item);
            });
        });

    }

    $scope.getPathContent('/');
};