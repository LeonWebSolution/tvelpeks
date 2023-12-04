export class TextVisible {
    constructor() {
        this.init();
    }

    init() {
        const itMobile = window.matchMedia("(min-width: 962px)").matches;

        if (!itMobile) {
            document.addEventListener('DOMContentLoaded', () => {
                var button = document.querySelector('.about-descr__btn');
                var textElement = document.querySelector('.about-descr__text');

                // Проверяем, что элементы существуют
                if (button && textElement) {
                    // Устанавливаем начальную высоту
                    textElement.style.maxHeight = '21rem';

                    button.addEventListener('click', () => {
                        // Переключаем класс active
                        textElement.classList.toggle('active');

                        // Если элемент сейчас активен, вычисляем его высоту и устанавливаем максимальную высоту
                        if (textElement.classList.contains('active')) {
                            textElement.style.maxHeight = textElement.scrollHeight + 'px';
                            button.textContent = 'Скрыть';
                        } else {
                            // Если элемент неактивен, устанавливаем максимальную высоту в 21rem
                            textElement.style.maxHeight = '21rem';
                            button.textContent = 'Смотреть все';
                        }
                    });
                }
            });
            document.addEventListener('DOMContentLoaded', function () {
                var contentInfo = document.querySelector('.rex__content-info');
                var btn = document.querySelector('.rex__btn');
                var txtBlur = document.querySelector('.txt-blur');
            
                btn.addEventListener('click', function () {
                    if (contentInfo.style.maxHeight) {
                        contentInfo.style.maxHeight = null;
                        btn.textContent = 'Показать';
                        txtBlur.classList.remove('hidden');
                    } else {
                        contentInfo.style.maxHeight = contentInfo.scrollHeight + 'px';
                        btn.textContent = 'Скрыть';
                        txtBlur.classList.add('hidden');
                    }
                });
            });
            document.addEventListener('DOMContentLoaded', function () {
                var contentInfo = document.querySelector('.subcategoirs-advantages__info');
                var btn = document.querySelector('.subcategoirs-advantages__btn');
                var txtBlur = document.querySelector('.txt-blur2');
            
                btn.addEventListener('click', function () {
                    if (contentInfo.style.maxHeight) {
                        contentInfo.style.maxHeight = null;
                        btn.textContent = 'Показать';
                        txtBlur.classList.remove('hidden');
                    } else {
                        contentInfo.style.maxHeight = contentInfo.scrollHeight + 'px';
                        btn.textContent = 'Скрыть';
                        txtBlur.classList.add('hidden');
                    }
                });
            });
        }
    }
}
