(() => {
  const refs = {
    openAboutBtn: document.querySelector('[about-modal-open]'),
    closeAboutBtn: document.querySelector('[about-modal-close]'),
    aboutmodal: document.querySelector('[about-modal]'),
  };

  refs.openAboutBtn.addEventListener('click', toggleModal);
  refs.closeAboutBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.aboutmodal.classList.toggle('is-hidden');
  }
})();
