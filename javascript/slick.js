 $(document).on('ready', function() {
      $(".slick-slider").slick({
   dots: true,
  infinite: false,
  speed: 300,
  // centerMode: true,
  variableWidth: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          // centerMode: true,
        variableWidth: true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
          // centerMode: true,
        variableWidth: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots:false,
        arrows:false,
          centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 });

