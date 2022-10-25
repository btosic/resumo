(function () {

    var box = $('#js-expand-box'),
        button = $('#js-expand-button'),
        expanded = false,
        toggleExpand;

    toggleExpand = function toggleExpand() {
        var height = $('#js-expand-measure').height();

        if(expanded) {
            box.css({ 'height': 0, 'opacity': 0});
            button.text('More');
        } else {
            box.css({'height': height + 30 + 'px', 'opacity': 1});
            button.text('Less');
        }

        expanded = !expanded;
    };

    button.on('click', toggleExpand);
}());

