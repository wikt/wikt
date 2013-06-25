'use strict';

/**
 * Article controller
 *
 * @param $scope
 * @param $stateParams
 * @param editorService {EditorService}
 * @param articleService {ArticleService}
 * @param categoryService {CategoryService}
 */
function ArticleController($scope, $stateParams, editorService, articleService, categoryService) {

    var path = $stateParams.path ? $stateParams.path : '';
    $scope.fileName = categoryService.getCurrentItemName(path);

    $scope.loadArticle = function() {
        articleService.getArticleContent(path).success(function(markdown) {
            var converter = new Showdown.converter();
            var html = converter.makeHtml(markdown);

            // Fix relative links for Angular -> prepend /#/
            html = html.replace(/href="(((?!:\/\/)[^"])*)"/g, 'href="#/$1"');

            $scope.markdown = markdown;
            $scope.html = html;
        });
    };

    $scope.loadArticle();

    $scope.articleEdition = false;

    $scope.editArticle = function() {
        $scope.articleEdition = true;
        editorService.open();
    };

    $scope.saveArticle = function() {
        var markdown = editorService.getSource();
        articleService.setArticleContent(path, markdown)
            .success(function() {
                $scope.closeArticle();
            })
            .error(function() {
                alert("Error while saving.");
            });
    };

    $scope.closeArticle = function() {
        $scope.articleEdition = false;
        editorService.close();
    };
}
