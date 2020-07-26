$(document).ready(function () {

    $(window).scroll(function () {

        var height = $('.intro-to-app').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 400) {
            $('.navbar').addClass('solid-nav');
        } else {
            $('.navbar').removeClass('solid-nav');
        }

    });
});