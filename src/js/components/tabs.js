export class Tabs {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.initTabs();
        });
    }

    initTabs() {
        // Получаем все вкладки и слайдеры
        var tabs = document.querySelectorAll('.projects__tab');
        var sliders = document.querySelectorAll('.projects__slider');

        // Проверяем, что есть хотя бы одна вкладка и один слайдер
        if (tabs.length > 0 && sliders.length > 0) {
            // Добавляем обработчик событий click к каждой вкладке
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    // Удаляем класс 'active' у всех вкладок и слайдеров
                    tabs.forEach((t) => {
                        t.classList.remove('active');
                    });
                    sliders.forEach((s) => {
                        s.classList.remove('active');
                    });

                    // Добавляем класс 'active' к кликнутой вкладке и соответствующему слайдеру
                    tab.classList.add('active');
                    sliders[index].classList.add('active');
                });
            });
        }
    }
}