(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
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

  const openModalfromMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.remove('is-open');
    modal.classList.remove('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openModalMenuBtn.addEventListener('click', openModalfromMenu);
  openModalHeaderBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  const refs = {
    openAboutBtn: document.querySelector('[about-modal-open]'),
    closeAboutBtn: document.querySelector('[about-modal-close]'),
    aboutmodal: document.querySelector('[about-modal]'),
  };
})();

