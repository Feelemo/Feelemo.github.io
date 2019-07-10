$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 900) {
            $('.back').fadeIn();    
        } else {
            $('.back').fadeOut();
        }
    });
 
    $('.back').click(function() {
        $('html,body').animate({scrollTop:0},800);
    });    
});