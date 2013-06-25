'use strict';

function EditorService() {
    var self = this;

    this.markdownConverter = new Showdown.converter();

    /**
     * HTML to Markdown
     * @param html {string}
     * @returns {string}
     */
    this.markdownize = function(html) {
        html = html.split("\n").map($.trim).filter(function(line) {
            return line != "";
        }).join("\n");
        return toMarkdown(html);
    };

    /**
     * Markdown to HTML
     * @param markdown {string}
     * @returns {string}
     */
    this.htmlize = function(markdown) {
        return self.markdownConverter.makeHtml(markdown);
    };

    this.showSource = function(content) {
        var markdown = self.markdownize(content);
        if (self.divSource.get(0).value == markdown) {
            return;
        }
        self.divSource.get(0).value = markdown;
    };


    this.updateHtml = function(content) {
        if (self.markdownize(self.divDocument.html()) == content) {
            return;
        }
        var html = self.htmlize(content);
        self.divDocument.html(html);
    };

    /**
     * Start up the editor
     */
    this.startEditor = function() {
        self.divDocument = jQuery('.document');
        self.divSource = jQuery('.document-source');

        self.divDocument.hallo({
            plugins: {
                'halloformat': {},
                'halloheadings': {},
                'hallolists': {},
                'halloreundo': {}
            },
            toolbar: 'halloToolbarFixed'
        });

        // Update Markdown every time content is modified
        self.divDocument.bind('hallomodified', function(event, data) {
            self.showSource(data.content);
        });

        // Source edition
        self.divSource.on('keyup', function() {
            self.updateHtml(this.value);
        });

        self.divDocument.on('halloactivated', function() {
            self.divSource.show(100);
            self.showSource(self.divDocument.html());
        });
        self.divDocument.on('hallodeactivated', function() {
            self.divSource.hide(100);
            self.showSource(self.divDocument.html());
        });
    }
}

var module = angular.module('wikt.services', []);
module.factory('editorService', function () {
    return new EditorService;
});
