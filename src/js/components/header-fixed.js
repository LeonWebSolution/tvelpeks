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