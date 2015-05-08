$(document).ready(function() {
    $('#erj').click(function () {
        $('#image img')
        each(function () {
            $(this).toggleClass('currentImage');
            $(this).toggleClass('hiddenImage');
        });
    });
});