function hideNavigation(nav, hamburger) {
  document.querySelector(nav).classList.remove('navigation-show');
  document.querySelector(hamburger).classList.remove('hamburger-open');
}

function removeContent(element) {
  document.querySelector(element).innerHTML = '';
}

module.exports = {
  hideNavigation,
  removeContent,
};
