const swiper = new Swiper('.mySwiper', {
  // Default parameters
  initialSlide: 1,

  centeredSlides: true,

  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
    },

    400: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1152: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
