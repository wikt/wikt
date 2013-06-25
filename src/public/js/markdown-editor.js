var setUpHallo = function($) {
    var divDocument = $('.document');
    var divSource = $('.documentSource');

    // Enable Hallo editor
    divDocument.hallo({
        plugins: {
            'halloformat': {},
            'halloheadings': {},
            'hallolists': {},
            'halloreundo': {}
        },
        toolbar: 'halloToolbarFixed'
    });

    var markdownize = function(content) {
        var html = content.split("\n").map($.trim).filter(function(line) {
            return line != "";
        }).join("\n");
        return toMarkdown(html);
    };

    var converter = new Showdown.converter();
    var htmlize = function(content) {
        return converter.makeHtml(content);
    };

    // Method that converts the HTML contents to Markdown
    var showSource = function(content) {
        var markdown = markdownize(content);
        if (divSource.get(0).value == markdown) {
            return;
        }
        divSource.get(0).value = markdown;
    };


    var updateHtml = function(content) {
        if (markdownize(divDocument.html()) == content) {
            return;
        }
        var html = htmlize(content);
        divDocument.html(html);
    };

    // Update Markdown every time content is modified
    divDocument.bind('hallomodified', function(event, data) {
        showSource(data.content);
    });

    // Source edition
    divSource.on('keyup', function() {
        updateHtml(this.value);
    });

    divDocument.on('halloactivated', function() {
        divSource.show(100);
        showSource(divDocument.html());
    });
    divDocument.on('hallodeactivated', function() {
        divSource.hide(100);
        showSource(divDocument.html());
    });
};
