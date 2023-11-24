document.addEventListener("DOMContentLoaded", function() {
    // Получаем все вкладки и слайдеры
    var tabs = document.querySelectorAll('.projects__tab');
    var sliders = document.querySelectorAll('.projects__slider');

    // Проверяем, что есть хотя бы одна вкладка и один слайдер
    if (tabs.length > 0 && sliders.length > 0) {
        // Добавляем обработчик событий click к каждой вкладке
        tabs.forEach(function(tab, index) {
            tab.addEventListener('click', function() {
                // Удаляем класс 'active' у всех вкладок и слайдеров
                tabs.forEach(function(t) {
                    t.classList.remove('active');
                });
                sliders.forEach(function(s) {
                    s.classList.remove('active');
                });

                // Добавляем класс 'active' к кликнутой вкладке и соответствующему слайдеру
                this.classList.add('active');
                sliders[index].classList.add('active');
            });
        });
    }
});
