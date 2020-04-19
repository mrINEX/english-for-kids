require('./js/createPage');
const { setNavigation } = require('./js/setSelectedLink');
const { hideNavigation, removeContent } = require('./js/hideNavigation');
const {
  removeActive, setActiveParent, setActive, setSwitch,
} = require('./js/activeMenu');
const { setMenuActive } = require('./js/setMenuActive');
const { handlerNavigation } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { turnsCard } = require('./js/turnsCard');
const { nodesGame, nodeStatistics } = require('./js/makeCards');
const { startPlay } = require('./js/startPlay');
const { makeMenu, makeStatistics } = require('./js/makeMenu');
const { isContain } = require('./js/isContain');
const { increment, incrementPlay } = require('./js/setStatistics');
const { sortStatistics } = require('./js/makeMenu');
const { isPlay } = require('./js/isPlay');
const { win } = require('./js/isWin');
const { data } = require('./js/data');
const { audio } = require('./js/getSong');
const { getIcon } = require('./js/icon');
const { storage } = require('./js/storage');

window.onload = () => {
  let count = 0;
  let incorrect = 0;
  makeMenu();
  makeCards(data, 'statistics');
  handlerNavigation('.hamburger', '.navigation');

  document.querySelector('input').addEventListener('change', ({ target }) => {
    const position = setSwitch('.menu');
    if (Number.isFinite(Number(position))) {
      removeContent('.main__wrapper');
      if (target.checked) {
        makeCards(nodeStatistics[position], 'play');
      } else {
        makeCards(nodeStatistics[position], 'train');
      }
    }
  });

  document.addEventListener('click', ({ target }) => {
    if (isContain('sort', target)) {
      if (target.hasAttribute('data-active')) {
        target.removeAttribute('data-active');
        sortStatistics(nodeStatistics, 'alphabet', 'not-reverse');
      } else {
        target.setAttribute('data-active', 'true');
        sortStatistics(nodeStatistics, 'alphabet', 'reverse');
      }
    }
    if (isContain('rate', target)) {
      if (target.hasAttribute('data-active')) {
        target.removeAttribute('data-active');
        sortStatistics(nodeStatistics, 'errorRate', 'not-reverse');
      } else {
        target.setAttribute('data-active', 'true');
        sortStatistics(nodeStatistics, 'errorRate', 'reverse');
      }
    }
    if (isContain('train-click', target)) {
      if (target.hasAttribute('data-active')) {
        target.removeAttribute('data-active');
        sortStatistics(nodeStatistics, 'trainNumber', 'not-reverse');
      } else {
        target.setAttribute('data-active', 'true');
        sortStatistics(nodeStatistics, 'trainNumber', 'reverse');
      }
    }
    if (isContain('play-success', target)) {
      if (target.hasAttribute('data-active')) {
        target.removeAttribute('data-active');
        sortStatistics(nodeStatistics, 'playSuccess', 'not-reverse');
      } else {
        target.setAttribute('data-active', 'true');
        sortStatistics(nodeStatistics, 'playSuccess', 'reverse');
      }
    }

    if (!target.classList.contains('hamburger')) {
      hideNavigation('.navigation', '.hamburger');
    }

    if (target.parentNode.classList.contains('menu__topic')) {
      removeActive('.menu');
      removeContent('.main__wrapper');
      if (isPlay()) {
        setNavigation('.menu', target, 'border_play');
        makeCards(nodeStatistics[target.parentNode.classList[1]], 'play');
      } else {
        setNavigation('.menu', target, 'border_train');
        makeCards(nodeStatistics[target.parentNode.classList[1]], 'train');
      }
    }

    if (isContain('menu__statistics', target)) {
      removeActive('.menu');
      setActive(isPlay(), '.menu__statistics');
      removeContent('.main__wrapper');
      makeStatistics(nodeStatistics);
    }

    if (target.parentNode.classList.contains('menu__nav')) {
      removeActive('.menu');
      removeContent('.main__wrapper');
      setActiveParent(isPlay(), target);
      makeMenu();
    }

    if (target.classList.contains('card-train')) {
      const audioSrc = target.getAttribute('data-song-card');
      audio.set(audioSrc).play();
      increment(nodeStatistics, target, 'train');
    }

    if (isContain('start-play', target)) {
      const img = startPlay(target);
      nodesGame.sort(() => Math.random() - 0.5);
      nodesGame[count].sing();
      img.onclick = () => {
        nodesGame[count].sing();
      };
    }

    if (document.querySelector('.sing-again') && target.classList.contains('card-play')) {
      const range = document.querySelector('.range-statistic');
      const isCorrect = nodesGame[count].getWord() === target.getAttribute('data-word-card');
      if (isCorrect) {
        target.classList.add('event-none', 'not-active');
        incrementPlay(nodeStatistics, nodesGame[count].getWord(), 'playYes');
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
            setTimeout(() => {
              win.no(incorrect);
              audio.failure().play();
            }, 500);
          } else {
            setTimeout(() => {
              win.yes();
              audio.success().play();
            }, 500);
          }
          setTimeout(() => {
            makeMenu();
            incorrect = 0;
          }, 3000);
        }
      } else {
        incorrect += 1;
        incrementPlay(nodeStatistics, nodesGame[count].getWord(), 'playNo');
        range.prepend(getIcon(isCorrect));
        audio.error().play();
      }
    }

    if (isContain('card-switch', target)) {
      turnsCard(target);
    }
  });
  window.addEventListener('unload', () => {
    storage(nodeStatistics);
  });
};
