$(function () {
    if ($(document).width() < 800) {
        $('.sidebar .nav').hide();
    }
    $('.sidebar .nav-clapse').click(function () {
        var nav = $('.sidebar .nav');
        if (nav.css('display') === 'none') {
            nav.show();
        }
        else {
            nav.hide();
        }
    });
    $(window).resize(function () {
        if ($(document).width()>=800) {
            var nav = $('.sidebar .nav');
            if (nav.css('display') === 'none') {
                nav.show();
            }
        }
        else {
            $('.sidebar .nav').hide();
        }
    });
});