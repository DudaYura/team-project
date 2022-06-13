(() => {
  const refs = {
    openAboutBtn: document.querySelector('[data-about-modal-open]'),
    closeAboutBtn: document.querySelector('[data-about-modal-close]'),
    aboutmodal: document.querySelector('[data-about-modal]'),
  };

  refs.openAboutBtn.addEventListener('click', toggleModal);
  refs.closeAboutBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.aboutmodal.classList.toggle('is-hidden');
  }
})();
