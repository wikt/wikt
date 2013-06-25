'use strict';

/**
 * Category controller
 *
 * @param $scope
 * @param $http
 * @param $stateParams
 */
function CategoryController($scope, $http, $stateParams) {

    var path = $stateParams.path ? $stateParams.path : '';

    $scope.getPathContent = function(path) {
        $scope.directories = [];
        $scope.files = [];

        $http.get('directory' + path).success(function(items) {
            items.forEach(function(item) {
                item.directory == true ? $scope.directories.push(item) : $scope.files.push(item);
            });
        });

    };

    $scope.getPathContent('/');
}
