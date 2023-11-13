window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var sectionMain = document.querySelector(".section-main");
    
    if (window.scrollY > 0) {
      header.classList.add("fixed");
      sectionMain.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
      sectionMain.classList.remove("fixed");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const zoomedImage = document.getElementById("zoomed-image");

    // Зумирование изображения при загрузке страницы
    zoomedImage.classList.add("zoomed");

    // Через 3 секунды сброс зума
    setTimeout(function () {
        zoomedImage.classList.remove("zoomed");
    }, 1000); // 3 секунды (3000 миллисекунд)
});