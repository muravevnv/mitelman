import Swiper from "swiper";
import { Navigation } from "swiper/modules";


console.log('123')

if(document.querySelector('[data-slider="main-news"]')) {
  const mainNewsSlider = new Swiper('[data-slider="main-news"]', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: '[data-slider-prev="main-news"]',
      prevEl: '[data-slider-next="main-news"]',
    },

    breakpoints: {
      768: {
        allowTouchMove: false
      }
    }
  })
}