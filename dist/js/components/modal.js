export class Modal {
  constructor() {
      this.modal = document.getElementById('modal-question');
      this.openModalBtn = document.getElementById('openModalBtn');
      this.closeModalBtn = document.getElementById('closeModalBtn');
      this.body = document.body;

      if (this.openModalBtn && this.modal) {
          this.openModalBtn.addEventListener('click', () => {
              this.openModal();
          });
      }

      if (this.closeModalBtn) {
          this.closeModalBtn.addEventListener('click', () => {
              this.closeModal();
          });
      }
  }

  openModal() {
      if (this.modal) {
          this.modal.style.display = 'flex';
          this.modal.classList.add('active');
          this.body.style.overflow = 'hidden';
      }
  }

  closeModal() {
      if (this.modal) {
          this.modal.style.display = 'none';
          this.modal.classList.remove('active');
          this.body.style.overflow = '';
      }
  }
}
