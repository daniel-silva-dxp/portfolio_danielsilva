"use strict";
$(document).ready(function () {
  AOS.init({
    easing: "ease-in-out-sine",
  });
  /* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
    /* ---------------------------------------------- */
  $("a.link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = "";
        }
      );
    }
  });
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
      nextEl: ".control-slide .swiper-btn-next",
      prevEl: ".swiper-btn-prev",
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
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  }),
  slide_cases_mobile = new Swiper(".slide-cases-mb", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    speed: 600,
    loop: !0,
    pagination: {
      el: ".swiper-count-mb",
      type: "fraction",
    },
    breakpoints: { 320: { slidesPerView: 1.3 }, 991: { slidesPerView: 2.8 } },
  });
