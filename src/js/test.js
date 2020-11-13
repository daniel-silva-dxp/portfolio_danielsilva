"use strict";
var slide_capa_cases = new Swiper(".slide-capa-cases", {
    slidesPerView: 2.2,
    spaceBetween: 43,
    loop: !0,
    speed: 800,
    centeredSlides: !0,
    watchSlidesVisibility: !0,
    watchSlidesProgress: !0,
    pagination: { el: ".pagination-box-cases" },
    navigation: {
      nextEl: ".s-cases .ctrl-slide .btn-next",
      prevEl: ".s-cases .ctrl-slide .btn-prev",
    },
  }),
  slide_sobre_case = new Swiper(".slide-sobre-case", {
    spaceBetween: 40,
    direction: "vertical",
    loop: !0,
    speed: 800,
    pagination: { el: ".page-fraction", type: "fraction" },
    navigation: {
      nextEl: ".s-cases .ctrl-slide .btn-next",
      prevEl: ".s-cases .ctrl-slide .btn-prev",
    },
    simulateTouch: !1,
    thumbs: { swiper: slide_capa_cases },
  }),
  slide_cases_mobile = new Swiper(".slide-cases-mb", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    speed: 600,
    loop: !0,
    pagination: { el: ".slide-cases-mb .swiper-pagination", clickable: !0 },
    breakpoints: { 320: { slidesPerView: 1.3 }, 750: { slidesPerView: 2.8 } },
  });
$(function () {
  $(window).on("scroll", function () {
    100 < $(window).scrollTop()
      ? $("header").addClass("header-fixed")
      : $("header").removeClass("header-fixed");
  });
}),
  $("header nav ul li a")
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var t = $(this.hash);
        (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length &&
          (e.preventDefault(),
          $("html, body").animate({ scrollTop: t.offset().top }, 1e3));
      }
    }),
  $("header .menu-mobile ul li a")
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (e) {
      if (
        (document.documentElement.classList.remove("menu-opened"),
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname)
      ) {
        var t = $(this.hash);
        (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length &&
          (e.preventDefault(),
          $("html, body").animate({ scrollTop: t.offset().top - 80 }, 1e3));
      }
    }),
  $(document).ready(function () {
    $("#current-year").text(new Date().getFullYear());
  }),
  AOS.init({ disable: "mobile" });
var btnOrcamento = document.querySelectorAll(".js-btn-form"),
  btnCloseOrcamento = document.getElementById("js-close-form"),
  checkbox = document.querySelectorAll(".checkbox"),
  numberPages = document.querySelectorAll(".opt-num");
numberPages.forEach(function (n) {
  n.addEventListener("click", function () {
    var e = n.textContent,
      t = n.parentElement.firstElementChild;
    numberPages.forEach(function (e) {
      e.classList.remove("checked");
    }),
      n.classList.add("checked"),
      (t.value = e);
  });
}),
  btnOrcamento.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault(), document.documentElement.classList.add("open-form");
    });
  }),
  btnCloseOrcamento.addEventListener("click", function () {
    document.documentElement.classList.remove("open-form");
  }),
  checkbox.forEach(function (a) {
    a.addEventListener("click", function () {
      var e = document.getElementById("js-link-prototipo"),
        t = a.firstElementChild.nextElementSibling.textContent,
        n = a.parentElement.firstElementChild;
      checkbox.forEach(function (e) {
        e.classList.remove("checked");
      }),
        a.classList.add("checked"),
        (n.value = t),
        (e.style.display = "NÃ£o" == t ? "none" : "block");
    });
  });
var inputForm = document.querySelectorAll(".js-input");
inputForm.forEach(function (e) {
  e.addEventListener("focus", function () {
    e.parentElement.classList.add("focus");
  }),
    e.addEventListener("focusout", function () {
      "" === e.value && e.parentElement.classList.remove("focus");
    });
}),
  $("#formContato").validate({
    rules: {
      nome: "required",
      email: { required: !0, email: !0 },
      mensagem: { required: !0 },
    },
    messages: {
      nome: "Nome Ã© obrigatÃ³rio",
      email: {
        required: "Email Ã© obrigatÃ³rio",
        email: "Insira um e-mail vÃ¡lido",
      },
      mensagem: { required: "Mensagem Ã© obrigatÃ³rio" },
    },
  });
var btnMenu = document.getElementById("js-open-menu");
function enableBtn() {
  $("aside form button").prop("disabled", !1);
}
btnMenu.addEventListener("click", function (e) {
  e.preventDefault(), document.documentElement.classList.toggle("menu-opened");
});
