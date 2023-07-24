var disable_scroll_detect = true
var goTop = $('.goTop');

$(function () {
    'use strict';
    //scroll
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            goTop.css('opacity', '1');
        } else {
            goTop.css('opacity', '0');
        }

        var scrollVal = $(this).scrollTop()
        if ($(window).outerWidth() > 767) {
            if (scrollVal > 40) {
                $('body').addClass('fixed')
            } else {
                $('body').removeClass('fixed')
            }
        }
        else {
            if (scrollVal > 0) {
                $('body').addClass('fixed')

            } else {
                $('body').removeClass('fixed')

            }
        }

        //header 滾動active
        if ($('.navbar-nav').length > 0 && $(window).outerWidth() > 991) {

            nav_active(scrollVal)
        }

    });

    //mobile header 
    //open
    if ($(window).outerWidth() <= 991) {

        $('.navbar-toggler').on('click', function () {
            //console.log('in')
            $(this).parents('body').toggleClass('open');
            $('#nav-icon').toggleClass('open');
        });

        // $('.navbar-toggler').on('click', function () {
        //     $(this).parents('body').removeClass('open');
        //     $('#nav-icon').removeClass('open');
        // });
    }

    //goTop
    $('goTop a').on('click', function () {
        $('html,body').animate({

            scrollTop: $(window).offset().top

        }, 1000, linear);
    })

    //錨點
    if ($('body').hasClass('home')) {
        $('.navbar li .nav-link').on('click', function (e) {
            e.preventDefault();
            var markNo = $(this.hash);
            console.log(markNo);

            if ($(window).outerWidth() > 991) {

                $('html,body').animate({

                    scrollTop: markNo.offset().top - 80

                }, 'slow', 'linear');
            }
            else {


                $(this).parents('body').removeClass('open');
                $('#nav-icon').removeClass('open');

                $('html,body').animate({

                    scrollTop: markNo.offset().top - 60

                }, 'slow', 'linear');
            }
            $(this).parent('.nav-item').addClass('active').siblings().removeClass('active');


            //return false;
        });
    }


    var header_height

    //scroll滾動時 錨點依據文章區域亮燈
    function nav_active(scrollVal) {

        var item_head, item_end, item_id, n_scrollVal;
        header_height = $('header').outerHeight();

        $("section").each(function (index, element) {

            item_id = $(element).attr('id');
            item_head = $(element).offset().top - 80;
            item_end = $(element).offset().top + $(element).outerHeight() - 80;

            n_scrollVal = scrollVal + header_height//現在所在位置
            //console.log(n_scrollVal + "item:" + item_head + "," + item_end)

            if (n_scrollVal > item_head && n_scrollVal <= item_end) {

                if (disable_scroll_detect) {//用點擊的時候false

                    slider_status_active(item_id);

                }

            }


        });

    }

    //錨點亮燈
    function slider_status_active(item_id) {

        $('.navbar li.nav-item').removeClass('active');
        $('.navbar li.nav-item[data-section=\"' + item_id + '\"]').addClass('active');

    }



});