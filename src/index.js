require('./js/createPage');
const { setNavigation } = require('./js/setSelectedLink');
const { hideNavigation, removeContent } = require('./js/hideNavigation');
const { removeActive, setActive, setSwitch } = require('./js/activeMenu');
const { handlerNavigation } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { turnsCard } = require('./js/turnsCard');
const { makeMenu } = require('./js/makeMenu');
const { isContain } = require('./js/isContain');
const { isPlay } = require('./js/isPlay');
const { data } = require('./js/data');

window.onload = () => {
  makeMenu();
  handlerNavigation('.hamburger', '.navigation');

  document.querySelector('input').addEventListener('change', ({ target }) => {
    const position = setSwitch('.menu');
    if (Number.isFinite(Number(position))) {
      removeContent('.main__wrapper');
      if (target.checked) {
        makeCards(data[position], 'play');
      } else {
        makeCards(data[position], 'train');
      }
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

    if (target.classList.contains('card-train')) {
      const audioSrc = target.getAttribute('data-song-card');
      const song = new Audio(`./src/assets/${audioSrc}`);
      song.play();
    }

    if (target.classList.contains('card-play')) {
      console.log('card play');
    }

    if (isContain('card-switch', target)) {
      turnsCard(target);
      // const turnCard = nodesPage[card.getAttribute('data-num-card')].generateTrainTurn();
      // turnCard.onmouseleave = (event) => {
      //   event.target.after(card);
      //   event.target.remove();
      // };
      // card.after(turnCard);
      // card.remove();
    }
  });
};
