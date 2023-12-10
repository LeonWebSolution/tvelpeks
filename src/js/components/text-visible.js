export class TextVisible {
    constructor() {
        this.init();
    }

    handleButtonClick(rexContentInfoSelector, buttonSelector, showText, hideText, txtBlurElementSelector) {
        const rexContentInfo = document.querySelector(rexContentInfoSelector);
        const button = document.querySelector(buttonSelector);

        if (rexContentInfo && button) {
            rexContentInfo.style.maxHeight = '21rem';

            button.addEventListener('click', function () {
                const txtBlurElement = document.querySelector(txtBlurElementSelector);

                txtBlurElement.classList.toggle('hidden');
                rexContentInfo.classList.toggle('active');

                if (rexContentInfo.classList.contains('active')) {
                    rexContentInfo.style.maxHeight = rexContentInfo.scrollHeight + 'px';
                    button.textContent = hideText;
                } else {
                    rexContentInfo.style.maxHeight = '21rem';
                    button.textContent = showText;
                }
            });
        }
    }

    init() {
        const isMobile = window.matchMedia("(max-width: 962px)").matches;

        if (isMobile) {
            document.addEventListener('DOMContentLoaded', () => {
                this.handleButtonClick('.about-descr__text', '.about-descr__btn', 'Смотреть все', 'Скрыть', '.txt-blur');
                this.handleButtonClick('.rex__content-info', '.rex__btn', 'Смотреть все', 'Скрыть', '.txt-blur');
                this.handleButtonClick('.subcategoirs-advantages__info', '.subcategoirs-advantages__btn', 'Смотреть все', 'Скрыть', '.txt-blur2');
            });
        }

        const isMobil = window.matchMedia("(max-width: 962px)").matches;

        if (isMobil) {
            const mobileButton = document.querySelector('.support-form__btn--mobile');

            if (mobileButton) {
                // Устанавливаем новый текст
                mobileButton.textContent = 'Отправить заявку';
            }
        }
    }
}
