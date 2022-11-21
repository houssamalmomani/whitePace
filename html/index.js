const swiper = new Swiper('.mySwiper', {
  // Default parameters
  initialSlide: 1,
  slidesPerView: 1,

  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1,
    },

    1150: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
