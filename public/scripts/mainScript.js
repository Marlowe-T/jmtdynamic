
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

function resetBtn() {
    $(".welcomeInfo").removeClass("d-none d-block");
    $(".updateInfo").removeClass("d-none d-block");
    $(".appInfo").removeClass("d-none d-block");
    $(".designInfo").removeClass("d-none d-block");
}

$("#designBtn").on("click", () => {
    resetBtn();
    $(".welcomeInfo").addClass("d-none");
    $(".updateInfo").addClass("d-none");
    $(".appInfo").addClass("d-none");
    $(".designInfo").addClass("d-block");
});

$("#updateBtn").on("click", () => {
    resetBtn();
    $(".welcomeInfo").addClass("d-none");
    $(".appInfo").addClass("d-none");
    $(".designInfo").addClass("d-none");
    $(".updateInfo").addClass("d-block");
});

$("#appBtn").on("click", () => {
    resetBtn();
    $(".welcomeInfo").addClass("d-none");
    $(".updateInfo").addClass("d-none");
    $(".designInfo").addClass("d-none");
    $(".appInfo").addClass("d-block");
});

