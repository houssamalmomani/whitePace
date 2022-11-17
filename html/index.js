var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// const swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 3,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     250: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     786: {
//       slidesPerView: 1,
//     },
//     // when window width is >= 640px
//     1152: {
//       slidesPerView: 1,
//     },
//   },
// });
