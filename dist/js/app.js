window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var sectionMain = document.querySelector(".main__section");
    
    if (window.scrollY > 0) {
      header.classList.add("fixed");
      sectionMain.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
      sectionMain.classList.remove("fixed");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const zoomedImage = document.getElementById("zoomed-image");

    // Зумирование изображения при загрузке страницы
    zoomedImage.classList.add("zoomed");

    // Через 3 секунды сброс зума
    setTimeout(function () {
        zoomedImage.classList.remove("zoomed");
    }, 1000); // 3 секунды (3000 миллисекунд)
});

document.getElementById('supportForm').addEventListener('submit', function(event) {
        var phoneNumberInput = document.getElementById('phoneNumber');
        var inputErrorLabel = document.querySelector('.input-arror');

        // Regular expression to check if the phone number is in the correct format
        var phoneNumberPattern = /^\d{10}$/;

        if (!phoneNumberPattern.test(phoneNumberInput.value)) {
            // If the phone number is not in the correct format, add the 'visible' class to the error label
            inputErrorLabel.classList.add('visible');
            phoneNumberInput.value = ''; // Clear the input value
            event.preventDefault(); // Prevent form submission
        } else {
            // If the phone number is in the correct format, remove the 'visible' class from the error label
            inputErrorLabel.classList.remove('visible');
        }
    });