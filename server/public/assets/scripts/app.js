$(document).ready(function(){
    $(".click").on("click", function(){
        $(this).toggleClass('currentImage');
        $(this).toggleClass('hiddenImage');
    });
});