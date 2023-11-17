var modal = document.getElementById('modal-question');
var openModalBtn = document.getElementById('openModalBtn');
var body = document.body;

openModalBtn.addEventListener('click', function() {
  openModal();
});

function openModal() {
  modal.style.display = 'flex';
  modal.classList.add('active'); 
  body.style.overflow = 'hidden'; 
}

function closeModal() {
  modal.style.display = 'none';
  modal.classList.remove('active'); 
  body.style.overflow = ''; 
}