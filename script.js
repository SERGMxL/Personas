$(document).ready(function(){
    $(".card").hover(function(){
        $(this).find(".hidden").slideDown(300);
    }, function(){
        $(this).find(".hidden").slideUp(300);
    });
});
