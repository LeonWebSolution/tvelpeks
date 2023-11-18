// let prevScrollPos = window.pageYOffset;
//     const header = document.querySelector('.header');
//     const mainSection = document.querySelector('.main__section');

//     window.onscroll = function() {
//       const currentScrollPos = window.pageYOffset;

//       if (prevScrollPos > currentScrollPos) {
//         // Скролл вверх
//         header.classList.add('fixed');
//         mainSection.classList.add('fixed');
//       } else {
//         // Скролл вниз
//         header.classList.remove('fixed');
//         mainSection.classList.remove('fixed');
//       }

//       prevScrollPos = currentScrollPos;
//     };

document.addEventListener('DOMContentLoaded', function() {
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

