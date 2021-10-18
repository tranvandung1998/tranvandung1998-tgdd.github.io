$(document).ready(function(){
    $('#slider-list .slides').slick({
        lazyLoad: 'progressive',
          arrows: true,
          dots: true,
          speed: 500,
          infinite: true,
          cssEase: 'ease-in-out',
          swipe: false,
          fade: true,
        asNavFor: '.slides, .slick-dots-thumb'
      });
      $('.slick-dots-thumb').slick({
        lazyLoad: 'progressive',
           arrows: false,
           infinite: true,
           slidesToShow: 3,
           centerMode: true,
           centerPadding: '53px',
           adaptiveHeight: true,
           cssEase: 'ease-in-out',
        asNavFor: '.slides, #slider .slides',
        focusOnSelect: true,
      });
        
});