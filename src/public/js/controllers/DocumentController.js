'use strict';

/* Document Controller */

/**
 * @param $scope
 * @param $stateParams
 * @param editorService {EditorService}
 * @param documentService {DocumentService}
 * @param repositoryService {RepositoryService}
 * @constructor
 */
function DocumentController($scope, $stateParams, editorService, documentService, repositoryService) {

    var path = $stateParams.path ? $stateParams.path : '';
    $scope.fileName = repositoryService.getCurrentItemName(path);

    $scope.loadDocument = function() {
        documentService.getDocumentContent(path).success(function(markdown) {
            var converter = new Showdown.converter();
            var html = converter.makeHtml(markdown);

            // Fix relative links for Angular -> prepend /#/
            html = html.replace(/href="(((?!:\/\/)[^"])*)"/g, 'href="#/$1"');

            $scope.markdown = markdown;
            $scope.html = html;
        });
    };

    $scope.loadDocument();

    $scope.documentOpened = false;

    $scope.editDocument = function() {
        $scope.documentOpened = true;
        editorService.open();
    };

    $scope.saveDocument = function() {
        var markdown = editorService.getSource();
        documentService.setDocumentContent(path, markdown)
            .success(function() {
                $scope.closeDocument();
            })
            .error(function() {
                alert("Error while saving.");
            });
    };

    $scope.closeDocument = function() {
        $scope.documentOpened = false;
        editorService.close();
    };
}
