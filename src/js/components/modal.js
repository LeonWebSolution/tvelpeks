var modal = document.getElementById('modal-question');
var openModalBtn = document.getElementById('openModalBtn');
var body = document.body;

if (openModalBtn && modal) {
  openModalBtn.addEventListener('click', function () {
    openModal();
  });
}

function openModal() {
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('active');
    body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active');
    body.style.overflow = '';
  }
}