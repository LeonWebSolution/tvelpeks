import { Fixed } from './components/header-fixed.js';
import { Nav } from './components/navbar.js';
import { Zoomed } from './components/zoomed-main.js';
import { Footer } from './components/dropwodn-footer.js';

import { SwiperInit } from './components/swiperinit.js';
import { Tabs } from './components/tabs.js';
import { TextVisible } from './components/text-visible.js';
import { Accordion } from './components/accordion.js';
import { Video } from './components/video.js';


import { Modal } from './components/modal.js';

const fixedInstance = new Fixed();
const NavInstance = new Nav();
const zoomedInstance = new Zoomed();
const FooterInstance = new Footer();
const SwiperInstance = new SwiperInit();
const TabsInstance = new Tabs();
const TextVisibleInstance = new TextVisible();
const AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const VideoInstance = new Video();

var wrapperr = document.querySelector('.document__wrapper');
if (wrapperr) {
    // Get the maximum height
    var maxHeight = wrapperr.scrollHeight;

    // Check if the button text element exists
    var buttonTextElement = document.querySelector('.document__btn p');
    if (buttonTextElement) {
        // Check if the button element exists
        var buttonElement = document.querySelector('.document__btn');
        if (buttonElement) {
            // Add a click event listener to the button
            buttonElement.addEventListener('click', function () {
                if (wrapperr.style.maxHeight === maxHeight + 'px') {
                    wrapperr.style.maxHeight = null;
                    buttonTextElement.textContent = 'Показать еще';
                    this.classList.remove('active');
                } else {
                    wrapperr.style.maxHeight = maxHeight + 'px';
                    buttonTextElement.textContent = 'Скрыть';
                    this.classList.add('active');
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Добавление <span> в пустые ячейки
    var comparisonTable = document.getElementById('comparison-type__table');
    if (comparisonTable) {
        comparisonTable.querySelectorAll('td').forEach(function (cell) {
            if (!cell.innerHTML.trim()) {
                cell.innerHTML = '<span></span>';
            }
        });
    }

    // Обработчик клика на кнопке "Вперед"
    var arrowNextBtn = document.querySelector('.table-arrow-next');
    if (arrowNextBtn) {
        arrowNextBtn.addEventListener('click', function () {
            var comparisonWrapper = document.querySelector('.comparison-type__wrapper');
            if (comparisonWrapper) {
                comparisonWrapper.scrollLeft += 100;
                updateArrowPrevState();
            }
        });
    }

    // Обработчик клика на кнопке "Назад"
    var arrowPrevBtn = document.querySelector('.table-arrow-prev');
    if (arrowPrevBtn) {
        arrowPrevBtn.addEventListener('click', function () {
                var comparisonWrapper = document.querySelector('.comparison-type__wrapper');
            if (comparisonWrapper) {
                comparisonWrapper.scrollLeft -= 100;
                updateArrowPrevState();
            }
        });
    }

    // Обработчик клика на кнопке "Показать/Скрыть"
    var comparisonWrapper = document.getElementById('comparisonWrapper');
    if (comparisonWrapper) {
        var maxHeight = comparisonWrapper.scrollHeight;
        var buttonTextElement = document.querySelector('.table-btn p');
        var tableBtn = document.querySelector('.table-btn');
        
        if (tableBtn) {
            tableBtn.addEventListener('click', function () {
                if (comparisonWrapper.style.maxHeight === maxHeight + 'px') {
                    comparisonWrapper.style.maxHeight = null;
                    buttonTextElement.textContent = 'Показать еще';
                    this.classList.remove('active');
                } else {
                    comparisonWrapper.style.maxHeight = maxHeight + 'px';
                    buttonTextElement.textContent = 'Скрыть';
                    this.classList.add('active');
                }
            });
        }
    }

    // Добавление обработчика события прокрутки
    var comparisonWrapperScroll = document.querySelector('.comparison-type__wrapper');
    if (comparisonWrapperScroll) {
        comparisonWrapperScroll.addEventListener('scroll', function () {
            updateArrowPrevState();
        });
    }

    // Инициализация состояния стрелки при загрузке
    updateArrowPrevState();
});

// Обновление состояния стрелки "Назад" в зависимости от положения скролла
function updateArrowPrevState() {
    var arrowPrev = document.querySelector('.table-arrow-prev');
    if (arrowPrev) {
        arrowPrev.classList.toggle('active', document.querySelector('.comparison-type__wrapper').scrollLeft > 0);
    }
}

// export class Component1 {
//   // Ваш код здесь
// }