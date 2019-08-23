$(document).ready(function(){
  $('.testimonials-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
    
  });

});

$(document).ready(function() {
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('open');
  })
})