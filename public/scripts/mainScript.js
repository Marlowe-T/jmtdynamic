
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

$("#serviceMenu .slideUpFast > button").on("click", () => {
    $("#defaultInfo").addClass("fadeOutRight");
    $("#maintenanceInfo").removeClass("animate");
    $("#managementInfo").removeClass("animate");
    $("#creationInfo").addClass("animate");
    $("#serviceMenu .slideUpFast > button").on("click", () => {
        $("#defaultInfo").addClass("animate");
        $("#defaultInfo").removeClass("fadeOutRight");
        $("#defaultInfo").removeClass("animate");
        $("#maintenanceInfo").removeClass("animate");
        $("#managementInfo").removeClass("animate");
        $("#creationInfo").removeClass("animate");
    });
});

$("#serviceMenu .slideUp > button").on("click", () => {
    $("#defaultInfo").addClass("fadeOutRight");
    $("#managementInfo").removeClass("animate");
    $("#creationInfo").removeClass("animate");
    $("#maintenanceInfo").addClass("animate");
});

$("#serviceMenu .slideUpSlow > button").on("click", () => {
    $("#defaultInfo").addClass("fadeOutRight");
    $("#maintenanceInfo").removeClass("animate");
    $("#creationInfo").removeClass("animate");
    $("#managementInfo").addClass("animate");
});

