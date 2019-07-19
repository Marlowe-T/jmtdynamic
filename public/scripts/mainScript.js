
$(document).on("scroll", () => {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height() * .65;
    var leftTags = $("div.fadeLeft");
    var rightTags = $("div.fadeRight");

    for (var i = 0; i < leftTags.length; i++) {
        var leftTag = leftTags[i];

        if ($(leftTag).position().top < pageBottom) {
            $(leftTag).addClass("animate");
        }
    }

    for (var i = 0; i < rightTags.length; i++) {
        var rightTag = rightTags[i];

        if ($(rightTag).position().top < pageBottom) {
            $(rightTag).addClass("animate");
        }
    }
});