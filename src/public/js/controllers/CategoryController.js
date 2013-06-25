'use strict';

/**
 * Category controller
 *
 * @param $scope
 * @param $http
 * @param $stateParams
 */
function CategoryController($scope, $http, $stateParams) {

function RepositoryController ($scope, $http, $stateParams, repositoryService) {

    var basePath = $stateParams.path ? $stateParams.path : '';

    $scope.getPathContent = function(path) {

        $scope.directories = [];
        $scope.files = [];
        $scope.parentDirectoryPath = repositoryService.getParentDirectory(path);
        console.log($scope.parentDirectoryPath);
        $http.get('directory/' + $scope.parentDirectoryPath).success(function(items) {
            items.forEach(function(item) {
                item.directory == true ? $scope.directories.push(item) : $scope.files.push(item);
            });
        });

    };

    $scope.getPathContent(basePath);
};