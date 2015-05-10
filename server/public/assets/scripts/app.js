function getData(){
    $.ajax({
        url: '/data',
        data: JSON.stringify(),
        success: function(response) {
            console.log(response);
            $('#skillz').append(response);
        }
    });
}

$(document).ready(function() {
    $('.getData').on('click', function(){
        $.ajax({
            url: '/template',
            success: function(response) {
                $('#skillz').append(response);
            }
        });
    });
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

});