'use strict';

/* Services */
angular.module('wikt.services', [])
    .value('version', '0.1')
    .service('editorService', EditorService)
    .service('articleService', ArticleService)
    .service('categoryService', CategoryService);
