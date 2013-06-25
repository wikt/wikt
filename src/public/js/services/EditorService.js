'use strict';

/**
 * WYSIWYG editor
 */
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
        if (self.divArticleSource.get(0).value == markdown) {
            return;
        }
        self.divArticleSource.get(0).value = markdown;
    };


    this.updateHtml = function(content) {
        if (self.markdownize(self.divArticle.html()) == content) {
            return;
        }
        var html = self.htmlize(content);
        self.divArticle.html(html);
    };

    /**
     * Start up the editor
     */
    this.open = function() {
        self.divArticle = jQuery('.article');
        self.divArticleSource = jQuery('.article-source');

        self.divArticle.hallo({
            plugins: {
                'halloformat': {},
                'halloheadings': {},
                'hallolists': {},
                'halloreundo': {}
            },
            editable: true,
            toolbar: 'halloToolbarFixed'
        });

        // Update Markdown every time content is modified
        self.divArticle.bind('hallomodified', function(event, data) {
            self.showSource(data.content);
        });

        // Source edition
        self.divArticleSource.on('keyup', function() {
            self.updateHtml(this.value);
        });

        self.showSource(self.divArticle.html());
        self.divArticleSource.show(100);
    };

    /**
     * Close the editor (and discard modifications)
     */
    this.close = function() {
        self.divArticleSource.hide(100);
        self.divArticle.hallo({editable: false});
        self.divArticle = null;
        self.divArticleSource = null;
    };

    /**
     * Returns the markdown source of the article
     * @returns {string}
     */
    this.getSource = function() {
        return self.markdownize(self.divArticle.html());
    };
}

