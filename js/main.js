$(function () {

    // $('.mainVisual .main_slide').slick({
    //     dots: false,
    //     autoplay: true,
    //     arrows: false,


    //     autoplaySpeed: 4000,

    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    // });

    $('#background').YTPlayer({
        mute: true,
        radio: 'auto',
        showControls: false,
        useOnMobile: true,
        quality: 'highres',
        containment: '#background',
        loop: true,
        autoPlay: true,
        stopMovieOnBlur: false,
        startAt: 0,
        opacity: 1,
    });

    $('.kawasakiSlide .main_slide').slick({
        dots: false,
        autoplay: true,
        arrows: true,

        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });


    $('.down_con a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $('.kawasaki_group ul>li a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });

    $(window).scroll(function (c) {
        var height = $(document).scrollTop();

        if (height > 1967) {
            $('.slideTitle').addClass('fix');
        } else if (height < 1967) {
            $('.slideTitle').removeClass('fix');
        }
    });


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        // 'disableScrolling': true,  
        // { 이게 있으면 over, close 되었을 때 x축으로 스크롤바 생김 }
        'alwaysShowClose': true,
        'maxWidth': 1200,
        'maxHeight': 800,
        'fitImagesInViewport': true,

    })
});




