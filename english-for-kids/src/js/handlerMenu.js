function handlerNavigation(hamburgerElement, navElement) {
  const hamburger = document.querySelector(hamburgerElement);
  const nav = document.querySelector(navElement);

  hamburger.addEventListener('click', () => {
    if (nav.classList.contains('navigation-show')) {
      nav.classList.remove('navigation-show');
      hamburger.classList.remove('hamburger-open');
    } else {
      nav.classList.add('navigation-show');
      hamburger.classList.add('hamburger-open');
    }
  });
}

module.exports = {
  handlerNavigation,
};
