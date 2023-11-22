const isMobile = window.matchMedia("(max-width: 962px)").matches;
if (!isMobile) {
  document.addEventListener('DOMContentLoaded', function () {
    var solutionLink = document.querySelector('.solution__link');
    var nameLinks = document.querySelectorAll('.solutions__name-link');
    var solutionsList = document.querySelector('.solutions__list');
    
    var productionLink = document.querySelector('.production__link');
    var productionNameLinks = document.querySelectorAll('.productions__name-link');
    var productionsList = document.querySelector('.productions__list');

    var aboutLink = document.querySelector('.about__link');
    var aboutNameLinks = document.querySelectorAll('.about__name-link');
    var aboutList = document.querySelector('.about__list');

    var calcLink = document.querySelector('.calc__link');
    var calcNameLinks = document.querySelectorAll('.calc__name-link');
    var calcList = document.querySelector('.calc__list');

    solutionLink.addEventListener('mouseover', function () {
        nameLinks.forEach(function (link) {
            link.classList.add('active');
        });
        solutionsList.classList.add('active');
    });

    solutionLink.addEventListener('mouseout', function () {
        nameLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        solutionsList.classList.remove('active');
    });

    productionLink.addEventListener('mouseover', function () {
        productionNameLinks.forEach(function (link) {
            link.classList.add('active');
        });
        productionsList.classList.add('active');
    });

    productionLink.addEventListener('mouseout', function () {
        productionNameLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        productionsList.classList.remove('active');
    });

    aboutLink.addEventListener('mouseover', function () {
        aboutNameLinks.forEach(function (link) {
            link.classList.add('active');
        });
        aboutList.classList.add('active');
    });

    aboutLink.addEventListener('mouseout', function () {
        aboutNameLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        aboutList.classList.remove('active');
    });

    calcLink.addEventListener('mouseover', function () {
        calcNameLinks.forEach(function (link) {
            link.classList.add('active');
        });
        calcList.classList.add('active');
    });

    calcLink.addEventListener('mouseout', function () {
        calcNameLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        calcList.classList.remove('active');
    });
});
}

document.addEventListener('DOMContentLoaded', function () {
  const isDesc = window.matchMedia("(min-width: 962px)").matches;
  const solutionsLink = document.querySelector('.solutions__name-link');
  const productionsLink = document.querySelector('.productions__name-link');
  const list = document.querySelector('.solutions__list');
  const productionsList = document.querySelector('.productions__list');
  const hamburgerMenu = document.querySelector('.hamburger__menu');
  const headerBottom = document.querySelector('.header__bottom');
  const body = document.body;
  const contactMenu = document.querySelector('.contact__menu');
  const contactMenuBlock = document.querySelector('.contact__menu-block');
  const aboutLink = document.querySelector('.about__link');
  const aboutNameLink = document.querySelector('.about__name-link');
  const aboutList = document.querySelector('.about__list');
  const calcLink = document.querySelector('.calc__link');
  const calcNameLink = document.querySelector('.calc__name-link');
  const calcList = document.querySelector('.calc__list');

  function toggleList(link, list) {
    const isActive = link.classList.contains('active');

    const allLinks = document.querySelectorAll('.solutions__name-link, .productions__name-link, .about__name-link, .calc__name-link');
    allLinks.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
        const otherList = otherLink.classList.contains('solutions__name-link') ? document.querySelector('.solutions__list') :
          (otherLink.classList.contains('productions__name-link') ? document.querySelector('.productions__list') :
            (otherLink.classList.contains('about__name-link') ? document.querySelector('.about__list') :
              document.querySelector('.calc__list')));
        otherList.classList.remove('active');
        otherList.style.maxHeight = '';
      }
    });

    link.classList.toggle('active');
    list.classList.toggle('active');

    const maxHeight = isActive ? '' : list.scrollHeight + 'px';
    list.style.maxHeight = maxHeight;
  }

  if (!isDesc) {
    // For small screens
    solutionsLink.addEventListener('click', function (event) {
      event.preventDefault();
      toggleList(solutionsLink, list);
    });

    productionsLink.addEventListener('click', function (event) {
      event.preventDefault();
      toggleList(productionsLink, productionsList);
    });

    aboutLink.addEventListener('click', function (event) {
      event.preventDefault();
      toggleList(aboutNameLink, aboutList);
    });

    calcLink.addEventListener('click', function (event) {
      event.preventDefault();
      toggleList(calcNameLink, calcList);
    });
  }

  // For the hamburger menu
  hamburgerMenu.addEventListener('click', function () {
    const isActive = hamburgerMenu.classList.contains('active');
    const solutionsNameLink = document.querySelectorAll('.solutions__name-link');
    const solutionsList = document.querySelector('.solutions__list');

    if (isActive) {
      hamburgerMenu.classList.remove('active');
      headerBottom.classList.remove('active');
      body.style.overflow = 'auto';

      solutionsNameLink.forEach(link => link.classList.remove('active'));
      solutionsList.classList.remove('active');
      solutionsList.style.maxHeight = '';

      productionsLink.classList.remove('active');
      productionsList.classList.remove('active');
      productionsList.style.maxHeight = '';

      aboutNameLink.classList.remove('active');
      aboutList.classList.remove('active');
      aboutList.style.maxHeight = '';

      calcNameLink.classList.remove('active');
      calcList.classList.remove('active');
      calcList.style.maxHeight = '';
    } else {
      hamburgerMenu.classList.add('active');
      headerBottom.classList.add('active');
      body.style.overflow = 'hidden';

      solutionsNameLink.forEach(link => link.classList.remove('active'));
      solutionsList.classList.remove('active');
      solutionsList.style.maxHeight = '';

      productionsLink.classList.remove('active');
      productionsList.classList.remove('active');
      productionsList.style.maxHeight = '';

      aboutNameLink.classList.remove('active');
      aboutList.classList.remove('active');
      aboutList.style.maxHeight = '';

      calcNameLink.classList.remove('active');
      calcList.classList.remove('active');
      calcList.style.maxHeight = '';
    }
  });

  // For the contact menu
  contactMenu.addEventListener('click', function () {
    contactMenu.classList.toggle('active');
    contactMenuBlock.classList.toggle('active');
  });
});




