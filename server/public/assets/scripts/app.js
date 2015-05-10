$(document).ready(function() {
    $('.westside').on("click", function () {
        $(this).slideUp();
    });
    $('.aaa').on("click", function () {
        $(this).slideUp();
    });
    $('.papa').on("click", function () {
        $(this).slideUp();
    });
    $('.prime').on("click", function () {
        $(this).slideUp();
    });
    $('.dctc').on("click", function () {
        $(this).slideUp();
    });
    $('.ses').on("click", function () {
        $(this).slideUp();
    });
    $('.map').on('click', function(){
        $.ajax({
            url: '/template',
            success: function(response) {
                $('#skillz').append(response);
                var child = $('#skillz').children().last();
                child.hide();
                child.fadeIn();
            }
        });
    });
});