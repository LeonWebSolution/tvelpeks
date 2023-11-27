export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      // Swiper for solutions__slider
      if (document.querySelector('.solutions__slider')) {
        var solutions = new Swiper('.solutions__slider', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          snap: {
            snapToSlides: true,
          },
          navigation: {
            nextEl: '#swiper-button-next-sol',
            prevEl: '#swiper-button-prev-sol',
          },
        });
      }

      // Swiper for work__slider
      if (document.querySelector('.work__slider')) {
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
      }

      // Swiper for projects__slider
      if (document.querySelector('.projects__slider')) {
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
      }

      // Swiper for reviews__slider
      if (document.querySelector('.reviews__slider')) {
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
      }

      // Swiper for partners__slider
      if (document.querySelector('.partners__slider')) {
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
      }

      // Swiper for history__slider
      if (document.querySelector('.history__slider')) {
        var history = new Swiper('.history__slider', {
          slidesPerView: 'auto',
          spaceBetween: 70,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-his',
            prevEl: '#swiper-button-prev-his',
          },
          breakpoints: {
            200: {
              spaceBetween: 15,
            },
          },
        });
      }

      // Swiper for heating-production__slider
      if (document.querySelector('.heating-production__slider')) {
        var heatingproduction = new Swiper('.heating-production__slider', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-hp',
            prevEl: '#swiper-button-prev-hp',
          },
        });
      }

      // Swiper for workers__slider
      if (document.querySelector('.workers__slider')) {
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
        });
      }

      // Swiper for heation-peculiarities__slider
      if (document.querySelector('.heation-peculiarities__slider')) {
        var heation = new Swiper('.heation-peculiarities__slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-pec',
            prevEl: '#swiper-button-prev-pec',
          },
        });
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 962) {
        // Swiper for advantages__slider
        if (document.querySelector('.advantages__slider')) {
          var advantages = new Swiper('.advantages__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        // Swiper for heating-parameters__slider
        if (document.querySelector('.heating-parameters__slider')) {
          var heatingParameters = new Swiper('.heating-parameters__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        // Swiper for production__slider
        if (document.querySelector('.production__slider')) {
          var production = new Swiper('.production__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
            snap: {
              snapToSlides: true,
            },
          });
        }

        // Swiper for peculiarities__slider
        if (document.querySelector('.peculiarities__slider')) {
          var peculiarities = new Swiper('.peculiarities__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
            snap: {
              snapToSlides: true,
            },
          });
        }

        // Swiper for services__slider
        if (document.querySelector('.services__slider')) {
          var services = new Swiper('.services__slider', {
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
        }

        // Swiper for articles__slider
        if (document.querySelector('.articles__slider')) {
          var articles = new Swiper('.articles__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        // Swiper for projects__tab-slider
        if (document.querySelector('.projects__tab-slider')) {
          var projectsTab = new Swiper('.projects__tab-slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }
      }
    });
  }
}
