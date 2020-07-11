$(function() {
    $(".span01").click(function() {
        var bt = $(this).find("p");
        var answer = $(this).find(".up");
        var img = $(this).find("img");

        if (answer.hasClass("drop")) {
            answer.removeClass("drop");
            img.attr("src", "images/arrow-up.png");
            return answer.slideDown();
        } else {
            img.attr("src", "images/icon-arrow.svg");
            answer.addClass("drop");
            return answer.slideUp();
        }
    });
});