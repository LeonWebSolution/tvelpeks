export class Fixed {
  constructor() {
    this.initScrollListener();
  }

  initScrollListener() {
    const isScroll = window.matchMedia("(max-width: 962px)").matches;
    if (isScroll) {
      document.addEventListener('DOMContentLoaded', () => {
        var myElement = document.querySelector('.header');
        var lastScrollTop = 0;
  
        window.addEventListener('scroll', function() {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
          if (scrollTop > lastScrollTop) {
            // Скролл вниз
            if (scrollTop > 300) {
              myElement.classList.add('top-del');
            }
          } else {
            // Скролл вверх
            if (scrollTop > 300) {
              myElement.classList.add('fixed');
            } else {
              myElement.classList.remove('fixed');
            }
  
            myElement.classList.remove('top-del');
          }
  
          lastScrollTop = scrollTop;
        });
      });
    }


    const isScrollDesk = window.matchMedia("(max-width: 962px)").matches;
    if (!isScrollDesk) {
      window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
  
        // Добавляем класс "fixed", если прокрутка больше чем 50px от верха страницы
        if (window.scrollY > 50) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      });
    }

    // const sticky = window.matchMedia("(max-width: 962px)").matches;
    // if (sticky) {
    //   document.addEventListener("DOMContentLoaded", function() {
    //     // Получаем элемент блока
    //     var blockSticky = document.querySelector('.navigation-sticky');
      
    //     // Добавляем обработчик события прокрутки окна
    //     window.addEventListener('scroll', function() {
    //       // Получаем координаты верхней границы блока и верхней границы окна
    //       var blockTop = blockSticky.getBoundingClientRect().top;
    //       var windowTop = 0;
      
    //       // Проверяем, когда верхняя граница блока касается верхней границы окна
    //       if (blockTop <= windowTop) {
    //         // Добавляем класс fixed
    //         blockSticky.classList.add('fixed');
    //       // } else {
    //       //   // Убираем класс fixed
    //       //   blockSticky.classList.remove('fixed');
    //       }
    //     });
    //   });
    // }
  }
}

