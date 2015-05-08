$(document).ready(function() {
    $('#erj').on("click", function () {
        $('#image img')
        each(function () {
            $(this).toggleClass('currentImage');
            $(this).toggleClass('hiddenImage');
        });
    });
});