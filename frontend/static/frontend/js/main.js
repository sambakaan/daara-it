$(document).ready(function () {
  console.log("Ready to work!");

  // dynamic date
  const date = new Date();
  document.querySelector('.year').innerHTML = date.getFullYear();

  // partner
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  // lightbox2 
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  // carousel home
  $('#galleryCarousel').carousel({
    interval: 3000
  });

  // gallery
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  

});