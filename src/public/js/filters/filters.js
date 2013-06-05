'use strict';

/* Filters */

angular.module('wikt.filters', []).
    filter('interpolate', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);
