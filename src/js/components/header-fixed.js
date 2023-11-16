window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  var sectionMain = document.querySelector(".main__section");
  
  if (window.scrollY > 0) {
    header.classList.add("fixed");
    sectionMain.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    sectionMain.classList.remove("fixed");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var myElement = document.querySelector('.header');
  var lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 500) {
      // Скролл вниз
      myElement.classList.add('hidden');
    } else {
      // Скролл вверх или на самом верху
      myElement.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
  });
});