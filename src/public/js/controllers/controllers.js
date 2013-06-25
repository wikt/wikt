'use strict';

/* Controllers */
angular.module('wikt.controllers', [])
    .value('version', '0.1')
    .controller('documentController', DocumentController)
    .controller('repositoryController', RepositoryController)