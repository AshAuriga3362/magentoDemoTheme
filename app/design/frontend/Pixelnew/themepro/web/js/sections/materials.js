define([
    'jquery',
    'slick'
], function ($) {

    $(".slideshow").slick({
        infinite: true,
        autoplay: false,
        dots: true,
        arrows: true,
        autoplaySpeed: 4000,
        slidesToShow:1,
        slidesToScroll: 1,
    });
    

    $(".slideshow-blog").slick({
        infinite: true,
        autoplay: false,
        dots: true,
        autoplaySpeed: 4000,
        slidesToShow:2,
        slidesToScroll: 1,
        centerPadding: '60px',
    });
    

});