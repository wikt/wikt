'use strict';

/* Controllers */

angular.module('wikt.controllers', []).
    controller('DocumentController', function ($scope) {
        $scope.getSample = function() {
            $.get('http://localhost:8080/file/README.md', function (data) {
                $scope.documentContent = data;
                $scope.view = "./views/document/sample"
            })
        }

        $scope.getSample();
});