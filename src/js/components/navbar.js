const minScreenWidth = 962;
const solutionsLinks = document.querySelectorAll('.solutions__name-link');
const productionsLinks = document.querySelectorAll('.productions__name-link');
const aboutLinks = document.querySelectorAll('.about__name-link');
const calcLinks = document.querySelectorAll('.calc__name-link');
const blurLink = document.querySelector('.blur-link');

document.addEventListener('scroll', () => {
  resetActiveClasses();
});

if (window.innerWidth > minScreenWidth) {
  const addMouseoverEvent = (link, list) => {
    link.addEventListener('mouseover', () => {
      resetActiveClasses();
      link.classList.add('active');
      list.classList.add('active');
      if (blurLink) blurLink.classList.add('active');
    });
  };

  solutionsLinks.forEach((link) => addMouseoverEvent(link, document.querySelector('.solutions__list')));
  productionsLinks.forEach((link) => addMouseoverEvent(link, document.querySelector('.productions__list')));
  aboutLinks.forEach((link) => addMouseoverEvent(link, document.querySelector('.about__list')));
  calcLinks.forEach((link) => addMouseoverEvent(link, document.querySelector('.calc__list')));

  blurLink.addEventListener('mouseover', () => {
    resetActiveClasses();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= minScreenWidth) {
      resetActiveClasses();
    }
  });
}

function resetActiveClasses() {
  const removeActiveClasses = (links, list) => {
    links.forEach((link) => link.classList.remove('active'));
    if (list) list.classList.remove('active');
  };

  removeActiveClasses(solutionsLinks, document.querySelector('.solutions__list'));
  removeActiveClasses(productionsLinks, document.querySelector('.productions__list'));
  removeActiveClasses(aboutLinks, document.querySelector('.about__list'));
  removeActiveClasses(calcLinks, document.querySelector('.calc__list'));

  if (blurLink) blurLink.classList.remove('active');
}
