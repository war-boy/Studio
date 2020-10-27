var currentDate = new Date();

var currentYear = currentDate.getFullYear();

var copyright = document.getElementById('copyright')

copyright.textContent = currentYear;

$(function () {
    $(".thumb").on("click", function () {
        var imgSrc = $(this).attr("src");

        $("#lightbox-container").html('<img src="' + imgSrc + '" class="img-responsive" />');
        $("#lightbox-container").fadeIn(500);
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });

    });
});