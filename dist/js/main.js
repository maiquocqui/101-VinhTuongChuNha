'use strict';

$(document).ready(function () {

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.product-nav'
    });

    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true
    });

    $('[data-toggle="tooltip"]').tooltip();
});