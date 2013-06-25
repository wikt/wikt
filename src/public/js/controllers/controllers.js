'use strict';

/* Controllers */
angular.module('wikt.controllers', [])
    .value('version', '0.1')
    .controller('articleController', ArticleController)
    .controller('categoryController', CategoryController);
