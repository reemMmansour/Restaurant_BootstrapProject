/**
 * Preloader
 */
// let preloader = querySelectorBy("#preloader");
// if (preloader) {
//   window.addEventListener("load", () => {
//     preloader.remove();
//   });
// }
const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false,
});
