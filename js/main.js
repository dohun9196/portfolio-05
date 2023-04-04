$(function () {

    // $('#background').YTPlayer({
    //     mute: true,
    //     radio: 'auto',
    //     showControls: false,
    //     useOnMobile: true,
    //     quality: 'highres',
    //     containment: '#background',
    //     loop: true,
    //     autoPlay: true,
    //     stopMovieOnBlur: false,
    //     startAt: 0,
    //     opacity: 1,
    // });

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

    // $(window).resize(function () {
    //     if (window.innerWidth > 769) {
    //         // 다바이스 크기가 769이상일때 
    //         $(window).scroll(function () {
    //             var height = $(document).scrollTop();

    //             if (height > 2100) {
    //                 $('.slideTitle').addClass('fix');
    //             } else if (height < 2100) {
    //                 $('.slideTitle').removeClass('fix');
    //             }
    //         })

    //     } else {
    //         // 다바이스 크기가 769이하일때 
    //         $(window).scroll(function () {
    //             var mheight = $(document).scrollTop();

    //             if (mheight > 1461) {
    //                 $('.slideTitle').addClass('fix');
    //             } else if (mheight < 1461) {
    //                 $('.slideTitle').removeClass('fix');
    //             }
    //             else {
    //                 $('.slideTitle').removeClass('fix');
    //             }
    //         })

    //     }
    // }).resize();


    $(window).resize(function () {
        var slideTitle = $('.slideTitle');
        var heightThreshold = 2100;
        var mheightThreshold = 1461;

        if (window.innerWidth > 769) {
            $(window).off('scroll').on('scroll', function () {
                var height = $(document).scrollTop();

                if (height > heightThreshold) {
                    slideTitle.addClass('fix');
                } else if (height < heightThreshold) {
                    slideTitle.removeClass('fix');
                }
            });
        } else {
            $(window).off('scroll').on('scroll', function () {
                var mheight = $(document).scrollTop();

                if (mheight > mheightThreshold) {
                    slideTitle.addClass('fix');
                } else if (mheight < mheightThreshold) {
                    slideTitle.removeClass('fix');
                } else {
                    slideTitle.removeClass('fix');
                }
            });
        }
    });

    $(window).trigger('resize'); // 초기 로드 시 이벤트 트리거


    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height > 700) {
            $('.top_btn').addClass('on');
        }
        else (
            $('.top_btn').removeClass('on')
        )
    })


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        // 'disableScrolling': true,  
        // { 이게 있으면 over, close 되었을 때 x축으로 스크롤바 생김 }
        'alwaysShowClose': true,
        // 'maxWidth': 1200,
        // 'maxHeight': 800,
        'fitImagesInViewport': true,

    });

    $('.top_btn a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
        return false;

    });



    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            $(this).parent().siblings().find('.dropdown').hide();
            $(this).next().toggle();
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('.dropdown').removeAttr('style');
        }
    });



});




