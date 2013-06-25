'use strict';

/**
 * Category controller
 *
 * @param $scope
 * @param $http
 * @param $stateParams
 * @param categoryService {CategoryService}
 */
function CategoryController($scope, $http, $stateParams, categoryService) {

    var path = $stateParams.path ? $stateParams.path : '';

    $scope.getPathContent = function(path) {
        $scope.directories = [];
        $scope.files = [];

        categoryService.getCategoryContent(path).success(function(items) {
            items.forEach(function(item) {
                item.directory == true ? $scope.directories.push(item) : $scope.files.push(item);
            });
        });

    };

    $scope.getPathContent('/');
}
