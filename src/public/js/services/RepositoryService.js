'use strict';

/* Repository Service */
angular.module('wikt.services', []).service('RepositoryService', RepositoryService);

function RepositoryService() {

    RepositoryService.prototype.getCurrentItemName = function(path) {
        var parts = path.split('\\');
        if (parts.length > 0) {
            return parts[parts.length - 1];
        }
    }

    RepositoryService.prototype.getParentDirectory = function(path) {
        var parentPath = path.split('\\').pop().join('\\');
        return parentPath;
    }

}
