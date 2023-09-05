$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 400 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.header .lang').on('click', function () {
        $(this).toggleClass('on');
    });

    // $('.header .ham_btn').on('click', function () {
    //     $('.gnb').toggleClass('on');
    // });

    // $('.gnb>ul>li').on('click', function (e) {
    //     if ($('.gnb').hasClass('on')) {
    //         e.preventDefault();
    //         $(this)
    //             .next()
    //             .stop()
    //             .slideToggle()
    //             .parent()
    //             .siblings()
    //             .find('.sub_box')
    //             .stop()
    //             .slideUp();
    //     }
    // })

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
        $('.main_vi .slide_num span').text(c ? (c + 1) : 1);
        $('.main_vi .slide_num strong').text(s.slideCount);
        $('.main_vi .menu li').eq(0).addClass('on');
        $('.main_vi .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_vi .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.pop_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.notice .tap_menu li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.notice .con_list .con').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_bann .txt_slide').slick({
        arrows: false,
        dots: false,
        asNavFor: ".main_bann .img_slide",
        fade: true,
        infinite: true,
    });

    $('.main_bann .img_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '5px',
        asNavFor: ".main_bann .txt_slide",
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.main_sns .menu_list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.main_sns .con_list .con').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.site strong').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
});