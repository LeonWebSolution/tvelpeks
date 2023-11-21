const isMobile = window.matchMedia("(max-width: 962px)").matches;
if (!isMobile) {
  document.addEventListener('DOMContentLoaded', function() {
    initHoverEvents();
  
    const contactMenus = document.querySelectorAll('.contact__menu');
    const contactMenuBlock = document.querySelector('.contact__menu-block');
  
    contactMenus.forEach(menu => {
      menu.addEventListener('mouseover', () => {
        contactMenuBlock.classList.add('active');
      });
  
      menu.addEventListener('mouseout', () => {
        contactMenuBlock.classList.remove('active');
      });
    });
  });
  
  function initHoverEvents() {
    const solutionsLinks = document.querySelectorAll('.solutions__name-link');
    const productionsLinks = document.querySelectorAll('.productions__name-link');
    const aboutLinks = document.querySelectorAll('.about__name-link');
    const calcLinks = document.querySelectorAll('.calc__name-link');
    const blurLink = document.querySelector('.blur-link');
  
    document.addEventListener('scroll', () => {
      resetActiveClasses();
    });
  
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
  }
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

  function toggleList(link, list) {
    const isActive = link.classList.contains('active');

    // Убираем 'active' класс и 'max-height' у всех связанных элементов
    const allLinks = document.querySelectorAll('.solutions__name-link, .productions__name-link');
    allLinks.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
        const otherList = otherLink.classList.contains('solutions__name-link') ? document.querySelector('.solutions__list') : document.querySelector('.productions__list');
        otherList.classList.remove('active');
        otherList.style.maxHeight = '';
      }
    });

    // Добавляем/убираем 'active' класс и 'max-height' текущему элементу
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
  
      // Remove 'active' class from solutions__name-link and solutions__list
      solutionsNameLink.forEach(link => link.classList.remove('active'));
      solutionsList.classList.remove('active');
      solutionsList.style.maxHeight = '';

      // Remove 'active' class from productions__name-link and productions__list
      productionsLink.classList.remove('active');
      productionsList.classList.remove('active');
      productionsList.style.maxHeight = '';
    } else {
      hamburgerMenu.classList.add('active');
      headerBottom.classList.add('active');
      body.style.overflow = 'hidden';
  
      // Add 'active' class to solutions__name-link and solutions__list
      solutionsNameLink.forEach(link => link.classList.add('active'));
      solutionsList.classList.add('active');
      const maxHeight = solutionsList.classList.contains('active') ? solutionsList.scrollHeight + 'px' : '';
      solutionsList.style.maxHeight = maxHeight;

      // Remove 'active' class from productions__name-link and productions__list
      productionsLink.classList.remove('active');
      productionsList.classList.remove('active');
      productionsList.style.maxHeight = '';
    }
  });

  // For the contact menu
  contactMenu.addEventListener('click', function () {
    contactMenu.classList.toggle('active');
    contactMenuBlock.classList.toggle('active');
  });
});



