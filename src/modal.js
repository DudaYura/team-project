(() => {
  const openModalMenuBtn = document.querySelector('.menu-buy-btn');
  const openModalHeaderBtn = document.querySelector('.header-buy-btn');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  const openModal = () => {
    modal.classList.remove('is-hidden');
  };

  const closeModal = () => {
    modal.classList.add('is-hidden');
  };

  openModalMenuBtn.addEventListener('click', openModal);
  openModalHeaderBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
})();
