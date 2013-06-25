'use strict';

/* Document Controller */
angular.module('wikt.controllers', []).controller('DocumentController', DocumentController);

/**
 * @param $scope
 * @param $stateParams
 * @param $http
 * @param editorService {EditorService}
 * @constructor
 */
function DocumentController($scope, $stateParams, $http, editorService, repositoryService) {

    var path = $stateParams.path ? $stateParams.path : '';
    $scope.fileName = repositoryService.getCurrentItemName(path);

    $scope.getMarkdown = function() {
        $http.get('file/' + encodeURIComponent(path)).success(function(markdown) {
            var converter = new Showdown.converter();
            var html = converter.makeHtml(markdown);

            // Fix relative links for Angular -> prepend /#/
            html = html.replace(/href="(((?!:\/\/)[^"])*)"/g, 'href="#/$1"');

            $scope.markdown = markdown;
            $scope.html = html;
        });
    };

    $scope.getMarkdown();

    $scope.documentOpened = false;

    $scope.editDocument = function() {
        $scope.documentOpened = true;
        editorService.open();
    };
    $scope.saveDocument = function() {
        $scope.documentOpened = false;
        editorService.save();
    };
    $scope.closeDocument = function() {
        $scope.documentOpened = false;
        editorService.close();
    };
}
