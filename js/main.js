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
});

//     $('.trip_slide').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,

//         prevArrow: $('#Trip_prev'),
//         nextArrow: $('#Trip_next'),
//     });

//     var slickNum = $('.mainBtn .num span');
//     $('.main_slide').on('init reInit afterChange', function (e, s, c) {

//         var i = (c ? c : 0) + 1;
//         slickNum.text(i + 0);
//     });



//     $('.banner_bottom a').on('click', function () {
//         var banner = $('.bannerWrap');
//         $(this).toggleClass('on')

//         if ($(this).hasClass('on')) {
//             $(banner).removeClass('on');
//         } else {
//             $(banner).addClass('on');
//         }
//     });


//     $('.banner_tit span').on('click', function () {
//         $('.banner_tit span').not($(this)).removeClass('on');
//         $(this).toggleClass('on');

//     });



//     $('.bmain_header span').on('click', function () {
//         $('.bmain_header span').not($(this)).removeClass('on');
//         $(this).toggleClass('on');
//     });
//     $('.banner_seat span').on('click', function () {
//         $('.banner_seat span').not($(this)).removeClass('on');
//         $(this).toggleClass('on');
//     });


