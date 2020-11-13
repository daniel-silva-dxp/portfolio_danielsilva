"use strict";
AOS.init({
  easing: "ease-in-out-sine",
});
//SWIPER
var slider_capa = new Swiper(".slide-capa-cases", {
    slidesPerView: 2.2,
    spaceBetween: 43,
    loop: !0,
    speed: 800,
    centeredSlides: !0,
    watchSlidesVisibility: !0,
    watchSlidesProgress: !0,
    pagination: {
      el: ".swiper-count",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  slider_about = new Swiper(".slide-about-cases", {
    spaceBetween: 40,
    direction: "vertical",
    loop: !0,
    speed: 800,
    pagination: {
      el: ".swiper-count",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  slide_cases_mobile = new Swiper(".slide-cases-mb", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    speed: 600,
    loop: !0,
    pagination: { el: ".slide-cases-mb .swiper-pagination", clickable: !0 },
    breakpoints: { 320: { slidesPerView: 1.3 }, 991: { slidesPerView: 2.8 } },
  });
