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

if (document.querySelector('[data-map]')) {
  const mapScript = document.createElement("script");
  mapScript.src =
    "https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU";

  document.body.append(mapScript);

  mapScript.addEventListener("load", () => {
    ymaps.ready(init);

    function init() {
      let myMap = new ymaps.Map("map", {
        center: [55.189789, 61.287821], // координаты центра Москвы
        zoom: 16
      });
  
      var myPlacemark = new ymaps.Placemark([55.189789, 61.287821], {
        balloonContent: "Центр Москвы"
      });
  
      myMap.geoObjects.add(myPlacemark);

      myMap.behaviors.disable('scrollZoom') 
    }
  });
}

const headerMenu = document.querySelector('.js-header-menu');
const headerMenuBtn = document.querySelector('.js-header-menu-btn');

if(headerMenu && headerMenuBtn) {
  const headerMenuClose = headerMenu.querySelector('.js-header-menu-close');

  headerMenuBtn.addEventListener('click', () => {
    headerMenu.classList.add('is-open');
    headerMenuBtn.classList.add('is-active');
  })

  headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.remove('is-open');
    headerMenuBtn.classList.remove('is-active');
  })
}