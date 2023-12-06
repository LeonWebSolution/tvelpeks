export class Tabs {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.initTabs();
        });
    }

    initTabs() {
        // Получаем все вкладки и слайдеры
        const tabs = document.querySelectorAll('.projects__tab');
        const sliders = document.querySelectorAll('.projects__slider');

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
        const items = document.querySelectorAll('.navigation-sticky__item');

        // Добавляем слушатель событий для каждого элемента
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                // Удаление класса 'active' у всех элементов
                items.forEach(function(innerItem) {
                    innerItem.classList.remove('active');
                });
    
                // Добавление класса 'active' к текущему элементу
                item.classList.add('active');
            });
        });

        const tabsContainers = document.querySelectorAll('.tabs');

        // Добавляем обработчик события click к каждому контейнеру
        tabsContainers.forEach((container) => {
          container.addEventListener('click', (event) => {
            // Проверяем, был ли клик на элементе с классом "tab"
            if (event.target.classList.contains('tab')) {
              // Удаляем класс "active" у всех дочерних элементов текущего контейнера
              container.querySelectorAll('.tab').forEach((tab) => {
                tab.classList.remove('active');
              });
      
              // Добавляем класс "active" только к выбранному элементу
              event.target.classList.add('active');
            }
          });
        });
    }
}
