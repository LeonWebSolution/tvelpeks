const itMobile = window.matchMedia("(min-width: 962px)").matches;

if (!itMobile) {
    document.addEventListener('DOMContentLoaded', function () {
        var button = document.querySelector('.about-descr__btn');
        var textElement = document.querySelector('.about-descr__text');

        // Проверяем, что элементы существуют
        if (button && textElement) {
            // Устанавливаем начальную высоту
            textElement.style.maxHeight = '21rem';

            button.addEventListener('click', function () {
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
}
