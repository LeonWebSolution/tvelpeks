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

