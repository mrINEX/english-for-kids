require('./js/createPage');
const { setNavigation } = require('./js/setSelectedLink');
const { hideNavigation, removeContent } = require('./js/hideNavigation');
const { removeActive, setActive, setSwitch } = require('./js/activeMenu');
const { setMenuActive } = require('./js/setMenuActive');
const { handlerNavigation } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { turnsCard } = require('./js/turnsCard');
const { nodesGame } = require('./js/makeCards');
const { startPlay } = require('./js/startPlay');
const { makeMenu } = require('./js/makeMenu');
const { isContain } = require('./js/isContain');
const { isPlay } = require('./js/isPlay');
const { win } = require('./js/isWin');
const { data } = require('./js/data');
const { audio } = require('./js/getSong');
const { getIcon } = require('./js/icon');

window.onload = () => {
  let count = 0;
  let incorrect = 0;
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

    if (isContain('start-play', target)) {
      const img = startPlay(target);
      nodesGame.sort(() => Math.random() - 0.5);
      nodesGame[count].sing();
      img.onclick = () => {
        nodesGame[count].sing();
      };
    }

    if (target.classList.contains('card-play')) {
      const range = document.querySelector('.range-statistic');
      const isCorrect = nodesGame[count].getWord() === target.getAttribute('data-word-card');
      if (isCorrect) {
        target.classList.add('event-none', 'not-active');
        audio.correct().play();
        range.prepend(getIcon(isCorrect));
        count += 1;
        if (count < 8) {
          nodesGame[count].sing();
        } else {
          count = 0;
          removeActive('.menu');
          removeContent('.main__wrapper');
          setMenuActive(isPlay());
          if (incorrect > 0) {
            win.no(incorrect);
            audio.failure().play();
          } else {
            win.yes();
            audio.success().play();
          }
          incorrect = 0;
          setTimeout(() => makeMenu(), 5000);
        }
      } else {
        incorrect += 1;
        range.prepend(getIcon(isCorrect));
        audio.error().play();
      }
    }

    if (isContain('card-switch', target)) {
      turnsCard(target);
    }
  });
};
