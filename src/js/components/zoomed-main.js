document.addEventListener("DOMContentLoaded", function () {
    const zoomedImage = document.getElementById("zoomed-image");
    if (zoomedImage) {
        zoomedImage.classList.add("zoomed");
        setTimeout(function () {
            if (zoomedImage) {
                zoomedImage.classList.remove("zoomed");
            }
        }, 1000);
    }
});
