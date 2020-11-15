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

  /* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
    );
    return pattern.test(emailAddress);
  }

  /* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

  $("#contact-form").submit(function (e) {
    e.preventDefault();

    var c_name = $("#c_name").val();
    var c_email = $("#c_email").val();
    var c_message = $("#c_message ").val();
    var response = $("#contact-form .ajax-response");

    var formData = {
      name: c_name,
      email: c_email,
      message: c_message,
    };

    if (
      c_name == "" ||
      c_email == "" ||
      c_message == "" ||
      !isValidEmailAddress(c_email)
    ) {
      response.fadeIn(500);
      response.html(
        '<i class="fa fa-warning"></i> Please fix the errors and try again.'
      );
    } else {
      $.ajax({
        type: "POST", // define the type of HTTP verb we want to use (POST for our form)
        url: "src/php/contact.php", // the url where we want to POST
        data: formData, // our data object
        dataType: "json", // what type of data do we expect back from the server
        encode: true,
        success: function (res) {
          var ret = $.parseJSON(JSON.stringify(res));
          response.html(ret.message).fadeIn(500);
        },
      });
    }
    return false;
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
