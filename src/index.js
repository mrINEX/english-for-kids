require('./js/createPage');
const { setNavigation } = require('./js/setSelectedLink');
const { hideNavigation, removeContent } = require('./js/hideNavigation');
const { removeActive, setActive, setSwitch } = require('./js/activeMenu');
const { handlerNavigation } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { makeMenu } = require('./js/makeMenu');
const { isPlay } = require('./js/isPlay');
const { data } = require('./js/data');

window.onload = () => {
  makeMenu();
  handlerNavigation('.hamburger', '.navigation');

  document.querySelector('input').addEventListener('change', ({ target }) => {
    const position = setSwitch('.menu');
    if (target.checked) {
      if (isFinite(position)) {
        removeContent('.main__wrapper');
        makeCards(data[position], 'play');
      }
    } else if (isFinite(position)) {
      removeContent('.main__wrapper');
      makeCards(data[position], 'train');
    }
  });

  document.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('hamburger')) {
      hideNavigation('.navigation', '.hamburger');
    }

    if (target.parentNode.classList.contains('menu__topic')) {
      removeActive('.menu');
      removeContent('.main__wrapper');
      if (isPlay()) {
        setNavigation('.menu', target, 'border_play');
        makeCards(data[target.parentNode.classList[1]], 'play');
      } else {
        setNavigation('.menu', target, 'border_train');
        makeCards(data[target.parentNode.classList[1]], 'train');
      }
    }
    if (target.parentNode.classList.contains('menu__nav')) {
      removeActive('.menu');
      removeContent('.main__wrapper');
      setActive(isPlay(), target);
      makeMenu();
    }
  });
};
