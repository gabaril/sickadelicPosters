import $ from 'jquery';
var alpha = 0;
var timer = '';

$(document).ready(function ($) {

    // ----- INIT -----    

    if ($(window).width() >= 800) {
        $('nav .nav-mobile, .voile').removeAttr("style");
        $('.col').removeClass('active');
        $('nav .nav-mobile').removeClass('visible');
    }
    else {
        $('nav .nav-mobile').removeClass('visible');
        $('.col').removeClass('active');

        $('input[type=text], input[type=email]').on('focus', function () {
            // replace CSS font-size with 16px to disable auto zoom on iOS
            $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px');
        }).on('blur', function () {
            // put back the CSS font-size
            $(this).css('font-size', $(this).data('fontSize'));
        });

    }

    // ----- RESIZE -----
    $(window).resize(function () {

        if ($(window).width() >= 800) {
            $('nav .nav-mobile, .voile').removeAttr("style");
            alpha = 0;
            $('.col').removeClass('active');
            $('nav .nav-mobile').removeClass('visible');
        }
        else {

            if ($('.col').hasClass('active')) {

            }
            else {
                $('nav .nav-mobile').removeClass('visible');
            }
        }
    });

    // ----- CLICK -----
    $('.col, .nav-mobile a, .clickable a, .voile').click(function () {
        if ($('.col').hasClass('active')) {
            //$('#root').removeClass('disabled');
            $('.logo-mobile').removeClass('clickable');
            $('.col').removeClass('active');
            timer = setInterval(function () {
                alpha -= 0.00625;
                $('.voile').css('opacity', alpha);
            }, 9.375);

            $('nav .nav-mobile').slideToggle(600, function () {
                $('nav .nav-mobile').removeClass('visible');
                $('nav .nav-mobile').removeAttr("style");
                clearInterval(timer);
                $('.voile').css('display', 'none');
                alpha = 0;
            });
        }
        else {
            var hauteurVoile = ($(document).height()) - 100;
            $('.voile').css('height', hauteurVoile);
            //$('#root').addClass('disabled');
            $('.col').addClass('active');
            $('.logo-mobile').addClass('clickable');
            $('.voile').css('display', 'block');
            timer = setInterval(function () {
                alpha += 0.00625;
                $('.voile').css('opacity', alpha);
            }, 9.375);

            $('nav .nav-mobile').slideToggle(600, function () {
                $('nav .nav-mobile').addClass('visible');
                clearInterval(timer);
                alpha = 0.4;
            });
        }

    });
});