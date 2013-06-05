'use strict';


// Declare app level module which depends on filters, and services
angular.module('wikt', ['wikt.filters', 'wikt.services', 'wikt.directives', 'wikt.controllers']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/sample', {templateUrl:'views/document/sample.html', controller:'DocumentController'});
    $routeProvider.otherwise({redirectTo: '/sample'});
}]);
