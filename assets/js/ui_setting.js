var disable_scroll_detect = true

$(function () {
    'use strict';

    //menu
    $(window).scroll(function () {


        if ($(this).scrollTop() > 0) {
            $('body').addClass('fixed')

        } else {
            $('body').removeClass('fixed')

        }


    });



    //like
    if (('button.like').length > 0) {
        $('button.like ').on('click', function () {

            $(this).toggleClass('liked');
        });

    }

    // datetime picker
    if (('form_date').length > 0) {

        $('.form_date').datetimepicker({
            format: 'YYYY.MM.DD',
            locale: 'zh-TW',
        });
    }



});