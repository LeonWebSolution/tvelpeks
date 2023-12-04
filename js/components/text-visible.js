export class TextVisible {
    constructor() {
        this.init();
    }

    init() {
        const itMobile = window.matchMedia("(min-width: 962px)").matches;

        if (!itMobile) {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupElement('.about-descr__btn', '.about-descr__text', 'Смотреть все', 'Скрыть');
                this.setupElement('.rex__btn', '.rex__content-info', 'Показать', 'Скрыть', '.txt-blur');
                this.setupElement('.subcategoirs-advantages__btn', '.subcategoirs-advantages__info', 'Показать', 'Скрыть', '.txt-blur2');
            });
        }
    }

    setupElement(btnSelector, contentSelector, showText, hideText, txtBlurSelector) {
        var button = document.querySelector(btnSelector);
        var contentInfo = document.querySelector(contentSelector);
        var txtBlur = document.querySelector(txtBlurSelector);

        // Проверяем, что элементы существуют
        if (button && contentInfo) {
            // Устанавливаем начальную высоту
            contentInfo.style.maxHeight = '21rem';

            button.addEventListener('click', () => {
                // Переключаем класс active
                contentInfo.classList.toggle('active');

                // Если элемент сейчас активен, вычисляем его высоту и устанавливаем максимальную высоту
                if (contentInfo.classList.contains('active')) {
                    contentInfo.style.maxHeight = contentInfo.scrollHeight + 'px';
                    button.textContent = hideText;
                } else {
                    // Если элемент неактивен, устанавливаем максимальную высоту в 21rem
                    contentInfo.style.maxHeight = '21rem';
                    button.textContent = showText;
                }

                // Toggle txtBlur visibility
                if (txtBlur) {
                    txtBlur.classList.toggle('hidden', !contentInfo.classList.contains('active'));
                }
            });
        }
    }
}

// Create an instance of TextVisible to initialize the functionality
const textVisibleInstance = new TextVisible();
