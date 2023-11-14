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