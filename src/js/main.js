"use strict";
// window.addEventListener("scroll", () => {
//   let page = this;
//   let pageTop = this.scrollY;
//   let pageHeight = this.outerHeight;

//   let frames = document.querySelectorAll(".scrollAnim");
//   frames.forEach((frame) => {
//     let frameTop = frame.offsetTop;
//     let frameHeight = frame.offsetHeight;

//     if (pageTop >= frameTop - pageHeight && pageTop < frameTop + frameHeight) {
//       frame.classList.add("anim");
//     } else {
//       frame.classList.remove("anim");
//     }
//   });
// });
AOS.init({
  easing: "ease-in-out-sine",
});
