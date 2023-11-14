
document.addEventListener("DOMContentLoaded", function () {
    const zoomedImage = document.getElementById("zoomed-image");

    // Зумирование изображения при загрузке страницы
    zoomedImage.classList.add("zoomed");

    // Через 3 секунды сброс зума
    setTimeout(function () {
        zoomedImage.classList.remove("zoomed");
    }, 1000); // 3 секунды (3000 миллисекунд)
});
