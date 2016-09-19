$(function () {
    //Слайдер
    $('.slider_header .bxslider').bxSlider({
        speed: 700,
        control: false,
        auto: true,
        pause: 5000,
    });

    $('.carousel').owlCarousel({
        items: 5,
        slideSpeed: 500,
        navigation: true,
        pagination: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [1023, 3],
        itemsTablet: [767, 2],
        itemsMobile: [479, 1],
    });

    //Плавный скролинг к якорю
    $('a.scroll').click(function () {
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000, {offset: 0});
        return false;
    });

    //pop_ap
    $('.button_click').fancybox({
        fitToView: false,
        maxWidth: '98%',
        width: '100%',
        autoSize: true,
        padding: 0
    });

    $('.button_product').fancybox({
        fitToView: false,
        maxWidth: '98%',
        width: '100%',
        autoSize: true,
        padding: 0,
        wrapCSS: 'fancybox_new'
    });
});

$(document).ready(function () {
    $('form').submit(function (e) {
        // console.log('hi');
        e.preventDefault();

        var form = $(this);

        $.fancybox.close();
        $.fancybox.open({
            autoSize: true,
            href: '#thanks1',
            // title: 'Спасибо за покупку',
            fitToView: false,
            maxWidth: '98%',
            width: '100%',
            padding: 0,
            wrapCSS: 'fancybox_new'
        });

        $.ajax({
            url: "/mail.php",
            method: "POST",
            data: $(this).serializeArray(),
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log('php error');
            }
        });
    });
})

$(window).load(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.buttonUp').addClass('active');
        } else {
            $('.buttonUp').removeClass('active');
        }
    });

    $('.slider_header').each(function () {
        var blockHeight4 = $(this).css('height');
        $('.slider_header .block').css('line-height', blockHeight4);
    });

    $(window).resize(function () {
        $('.slider_header').each(function () {
            var blockHeight4 = $(this).css('height');
            $('.slider_header .block').css('line-height', blockHeight4);
        });
    });

    if (device.desktop()) {

        $('.condiment').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.condiment .block:eq(0)').addClass('animated fadeInLeft');
                }, 100);

                setTimeout(function () {
                    $('.condiment .block:eq(1)').addClass('animated fadeInLeft');
                }, 300);

                setTimeout(function () {
                    $('.condiment .block:eq(2)').addClass('animated fadeInLeft');
                }, 500);
            }
        });

        $('.block_client').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.block_client .block:eq(0)').addClass('animated fadeIn');
                }, 100);

                setTimeout(function () {
                    $('.block_client .block:eq(1)').addClass('animated fadeIn');
                }, 300);

                setTimeout(function () {
                    $('.block_client .block:eq(2)').addClass('animated fadeIn');
                }, 500);

                setTimeout(function () {
                    $('.block_client .block:eq(3)').addClass('animated fadeIn');
                }, 700);
            }
        });
        $('.about').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.about .block:eq(0)').addClass('animated zoomIn');
                }, 100);

                setTimeout(function () {
                    $('.about .block:eq(1)').addClass('animated zoomIn');
                }, 200);

                setTimeout(function () {
                    $('.about .block:eq(2)').addClass('animated zoomIn');
                }, 300);

                setTimeout(function () {
                    $('.about .block:eq(3)').addClass('animated zoomIn');
                }, 400);

                setTimeout(function () {
                    $('.about .block:eq(4)').addClass('animated zoomIn');
                }, 500);

                setTimeout(function () {
                    $('.about .block:eq(5)').addClass('animated zoomIn');
                }, 600);

                setTimeout(function () {
                    $('.about .block:eq(6)').addClass('animated zoomIn');
                }, 700);
            }
        });

        $('.block_better').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.block_better .block:eq(0)').addClass('animated pulse');
                }, 100);

                setTimeout(function () {
                    $('.block_better .block:eq(1)').addClass('animated pulse');
                }, 300);

                setTimeout(function () {
                    $('.block_better .block:eq(2)').addClass('animated pulse');
                }, 500);

                setTimeout(function () {
                    $('.block_better .block:eq(3)').addClass('animated pulse');
                }, 700);

                setTimeout(function () {
                    $('.block_better .block:eq(4)').addClass('animated pulse');
                }, 900);
            }
        });
        $('footer').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('footer .sector').addClass('animated zoomInUp');
                }, 100);
                setTimeout(function () {
                    $('footer .menu').addClass('animated zoomInUp');
                }, 100);
                setTimeout(function () {
                    $('footer .contacts').addClass('animated zoomInUp');
                }, 100);
                setTimeout(function () {
                    $('footer .counter').addClass('animated zoomInUp');
                }, 100);
            }
        });
        $('.section2 .carousel').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.section2 .carousel .owl-controls .owl-buttons div.owl-prev').addClass('animated fadeInLeft');
                }, 100);
                setTimeout(function () {
                    $('.section2 .carousel .owl-controls .owl-buttons div.owl-next').addClass('animated fadeInRight');
                }, 100);
            }
        });
        $('.section6 .carousel').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.section6 .carousel .owl-controls .owl-buttons div.owl-prev').addClass('animated fadeInLeft');
                }, 100);
                setTimeout(function () {
                    $('.section6 .carousel .owl-controls .owl-buttons div.owl-next').addClass('animated fadeInRight');
                }, 100);
            }
        });
        $('.section4 .title_big').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.section4 .title_big .line_an:eq(0)').addClass('animated fadeInLeft');
                }, 100);
                setTimeout(function () {
                    $('.section4 .title_big .line_an:eq(1)').addClass('animated fadeInRight');
                }, 100);
            }
        });
        $('.section4 .sub_title').on('inview', function (event, isInView) {
            if (isInView) {
                setTimeout(function () {
                    $('.section4 .sub_title').addClass('animated fadeIn');
                }, 100);
            }
        });

        $('.anim_title').on('inview', function (event, isInView) {
            if (isInView) {
                $('.anim_title').addClass('active');
            }
        });
    }
});