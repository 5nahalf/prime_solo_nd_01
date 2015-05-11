var skillbase;
var templateHTML;
function getData(){
    $.ajax({
        url: '/data',
        data: JSON.stringify(),
        success: function(response) {
            skillbase = response;
            addskills();
        }
    });
}

function addskills(){
    console.log("yea, adding skills works");
    for(var i = 0; i < skillbase.skillz.length; i++){
        console.log("Append ran");
        $("#skillz").append(templateHTML);
        $('#skillz').children().last().children(".skill").append(skillbase.skillz[i].skill);
        $('#skillz').children().last().children(".exp").append(skillbase.skillz[i].exp);
    }
}

$(document).ready(function() {
    $('.getData').on('click', function(){
        $.ajax({
            url: '/template',
            success: function(response) {
                templateHTML = response;
                getData();
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