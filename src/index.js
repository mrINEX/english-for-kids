require('./js/createPage');
const { setNavigation } = require('./js/setSelectedLink');
const { hideNavigation, removeContent } = require('./js/hideNavigation');
const { removeActive, setActive, setSwitch } = require('./js/activeMenu');
const { handlerNavigation } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { turnsCard } = require('./js/turnsCard');
const { nodesGame } = require('./js/makeCards');
const { startPlay } = require('./js/startPlay');
const { makeMenu } = require('./js/makeMenu');
const { isContain } = require('./js/isContain');
const { isPlay } = require('./js/isPlay');
const { data } = require('./js/data');
const { getIcon } = require('./js/icon');

window.onload = () => {
  let count = 0;
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
        new Audio('./src/assets/audio/correct.mp3').play();
        range.prepend(getIcon(isCorrect));
        count += 1;
        if (count < 8) {
          nodesGame[count].sing();
        } else {
          count = 0;
          new Audio('./src/assets/audio/success.mp3').play();
          removeActive('.menu');
          removeContent('.main__wrapper');
          if (isPlay) {
            document.querySelector('.menu__nav').classList.add('border_play');
          } else {
            document.querySelector('.menu__nav').classList.add('border_train');
          }
          makeMenu();
        }
      } else {
        range.prepend(getIcon(isCorrect));
        new Audio('./src/assets/audio/error.mp3').play();
      }
    }

    if (isContain('card-switch', target)) {
      turnsCard(target);
    }
  });
};
