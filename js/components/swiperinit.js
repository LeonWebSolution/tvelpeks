export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      var solutions = new Swiper('.solutions__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        freeMode: true,
        freeModeSticky: true,
        snap: {
          // Включаем снэпинг
          snapToSlides: true,
        },
        navigation: {
          nextEl: '#swiper-button-next-sol',
          prevEl: '#swiper-button-prev-sol',
        },
      });
      
      var work = new Swiper('.work__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        freeMode: true,
        freeModeSticky: true,
        snap: {
          snapToSlides: true,
        },
        freeModeMomentum: false,
        navigation: {
          nextEl: '#swiper-button-next-work',
          prevEl: '#swiper-button-prev-work',
        },
      });
      
      var projects = new Swiper('.projects__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        freeMode: true,
        freeModeSticky: true,
        navigation: {
          nextEl: '#swiper-button-next-proj',
          prevEl: '#swiper-button-prev-proj',
        },
      });
      
      var reviews = new Swiper('.reviews__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        freeMode: true,
        freeModeSticky: true,
        navigation: {
          nextEl: '#swiper-button-next-reviews',
          prevEl: '#swiper-button-prev-reviews',
        },
      });
      
      var partners = new Swiper('.partners__slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        loop: true,
        breakpoints: {
          200: {
            freeMode: true,
            freeModeSticky: true,
          },
          1024: {
            freeMode: false,
            freeModeSticky: false,
          },
        },
      });
      
      var history = new Swiper('.history__slider', {
        slidesPerView: 'auto',
        spaceBetween: 70,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        navigation: {
          nextEl: '#swiper-button-next-his',
          prevEl: '#swiper-button-prev-his',
        },
        freeMode: true,
        freeModeSticky: true,
        breakpoints: {
          200: {
            freeMode: true,
            freeModeSticky: true,
            spaceBetween: 15,
          },
        },
      });
      
      var workers = new Swiper('.workers__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        freeMode: true,
        freeModeSticky: true,
        navigation: {
          nextEl: '#swiper-button-next-workrs',
          prevEl: '#swiper-button-prev-workrs',
        },
        breakpoints: {
          200: {
            freeMode: true,
            freeModeSticky: true,
          },
        },
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 962) {
          var advantage = new Swiper('.advantages__slider', {
              slidesPerView: 'auto',
              spaceBetween: 30,
              initialSlide: 0, 
              centerInsufficientSlides: true,
              loop: false,
              freeMode: true,
              freeModeSticky: true,
          });
          var production = new Swiper('.production__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0, 
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
            snap: {
              // Включаем снэпинг
              snapToSlides: true,
            },
        });
        var pecul = new Swiper('.peculiarities__slider', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          initialSlide: 0, 
          centerInsufficientSlides: true,
          loop: false,
          freeMode: true,
          freeModeSticky: true,
          snap: {
            // Включаем снэпинг
            snapToSlides: true,
          },
      });
        var production = new Swiper('.services__slider', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          initialSlide: 0, 
          centerInsufficientSlides: true,
          loop: false,
          freeMode: true,
          freeModeSticky: true,
          snap: {
            snapToSlides: true,
            snapToSlidesOffset: 70,
          },
      });
      var articles = new Swiper('.articles__slider', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        initialSlide: 0, 
        centerInsufficientSlides: true,
        loop: false,
        freeMode: true,
        freeModeSticky: true,
    });
    var articles = new Swiper('.projects__tab-slider', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      initialSlide: 0, 
      centerInsufficientSlides: true,
      loop: false,
      freeMode: true,
      freeModeSticky: true,
    });
      }
    });
  }
}
