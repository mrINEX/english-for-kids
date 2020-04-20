function setMenuActive(bool) {
  if (bool) {
    document.querySelector('.menu__nav').classList.add('border_play');
  } else {
    document.querySelector('.menu__nav').classList.add('border_train');
  }
}

module.exports = {
  setMenuActive,
};
