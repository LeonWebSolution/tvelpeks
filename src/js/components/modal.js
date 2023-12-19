export class Modal {
    constructor() {
      document.addEventListener('DOMContentLoaded', function () {
        // Получаем все кнопки с классом 'open-modal'
        var openModalButtons = document.querySelectorAll('.open-modal');
        var closeModalBtn = document.getElementById('closeModalBtn');
        var modalQuestion = document.getElementById('modal-question');
        var body = document.body;
  
        function openModal() {
          modalQuestion.classList.add('active');
          body.classList.add('overflow-hidden');
        }
  
        function closeModal() {
          modalQuestion.classList.remove('active');
          body.classList.remove('overflow-hidden');
        }
  
        // Назначаем обработчик события для каждой кнопки
        openModalButtons.forEach(function (button) {
          button.addEventListener('click', openModal);
        });
  
        closeModalBtn.addEventListener('click', closeModal);
      });
    }
  }