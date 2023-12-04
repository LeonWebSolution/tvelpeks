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
var maxHeight = wrapperr.scrollHeight;
var buttonTextElemente = document.querySelector('.document__btn p');

document.querySelector('.document__btn').addEventListener('click', function () {
    if (wrapperr.style.maxHeight === maxHeight + 'px') {
        wrapperr.style.maxHeight = null;
        buttonTextElemente.textContent = 'Показать еще';
        this.classList.remove('active');
    } else {
        wrapperr.style.maxHeight = maxHeight + 'px';
        buttonTextElemente.textContent = 'Скрыть';
        this.classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Добавление <span> в пустые ячейки
    document.querySelectorAll('#comparison-type__table td').forEach(function (cell) {
        if (!cell.innerHTML.trim()) {
            cell.innerHTML = '<span></span>';
        }
    });

    // Обработчик клика на кнопке "Вперед"
    document.querySelector('.table-arrow-next').addEventListener('click', function () {
        document.querySelector('.comparison-type__wrapper').scrollLeft += 100;
        updateArrowPrevState();
    });

    // Обработчик клика на кнопке "Назад"
    document.querySelector('.table-arrow-prev').addEventListener('click', function () {
        document.querySelector('.comparison-type__wrapper').scrollLeft -= 100;
        updateArrowPrevState();
    });

    // Обработчик клика на кнопке "Показать/Скрыть"
    var wrapper = document.getElementById('comparisonWrapper');
    var maxHeight = wrapper.scrollHeight;
    var buttonTextElement = document.querySelector('.table-btn p');

    document.querySelector('.table-btn').addEventListener('click', function () {
        if (wrapper.style.maxHeight === maxHeight + 'px') {
            wrapper.style.maxHeight = null;
            buttonTextElement.textContent = 'Показать еще';
            this.classList.remove('active');
        } else {
            wrapper.style.maxHeight = maxHeight + 'px';
            buttonTextElement.textContent = 'Скрыть';
            this.classList.add('active');
        }
    });

    // Добавление обработчика события прокрутки
    document.querySelector('.comparison-type__wrapper').addEventListener('scroll', function () {
        updateArrowPrevState();
    });

    // Инициализация состояния стрелки при загрузке
    updateArrowPrevState();
});

// Обновление состояния стрелки "Назад" в зависимости от положения скролла
function updateArrowPrevState() {
    var arrowPrev = document.querySelector('.table-arrow-prev');
    arrowPrev.classList.toggle('active', document.querySelector('.comparison-type__wrapper').scrollLeft > 0);
}

// export class Component1 {
//   // Ваш код здесь
// }