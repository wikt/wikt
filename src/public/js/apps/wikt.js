'use strict';


// Declare app level module which depends on filters, and services
angular
    .module('wikt', ['ui.state', 'wikt.filters', 'wikt.services', 'wikt.directives', 'wikt.controllers'])
    .config(function ($stateProvider, $routeProvider, $urlRouterProvider) {

        $stateProvider.state('sample', {
            url: '/:path',
            views: {
                "sample" : {
                    templateUrl: 'views/document/sample.html'
                },
                "tree" : {
                    templateUrl: 'views/repository/tree.html'
                }
            }
        });

        $urlRouterProvider.otherwise('/');
        
    });
