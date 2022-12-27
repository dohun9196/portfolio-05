$(function () {

    $('.mainVisual .main_slide').slick({
        dots: false,
        autoplay: true,
        arrows: false,


        autoplaySpeed: 4000,

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
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
});




