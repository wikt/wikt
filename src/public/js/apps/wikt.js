'use strict';


// Declare app level module which depends on filters, and services
angular
    .module('wikt', ['wikt.filters', 'wikt.services', 'wikt.directives', 'wikt.controllers'])
    .config(['$routeProvider', function ($routeProvider) {
        // File
        $routeProvider.when('/:path', {
            templateUrl: 'views/document/sample.html',
            controller: 'DocumentController'
        });
        // Default URL
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
