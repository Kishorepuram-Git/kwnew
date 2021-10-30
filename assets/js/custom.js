/* <!-- Initialize Swiper --> */
var swiper = new Swiper(".swiper3-cont", {
    slidesPerView: 1.5,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView:3,
        spaceBetween: 0,
      },
     
    },
  });