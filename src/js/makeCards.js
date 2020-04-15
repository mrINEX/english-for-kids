const { Card } = require('./createCard');

function makeCards(array, typeCards) {
  const main = document.querySelector('.main__wrapper');

  if (typeCards === 'train') {
    array.forEach((card) => {
      main.append(new Card(card).generateTrainCard());
    });
  }

  if (typeCards === 'play') {
    main.innerHTML = '<button class="start-play">START PLAY</button>';
    array.forEach((card) => {
      main.append(new Card(card).generatePlayCard());
    });
  }
}

module.exports = {
  makeCards,
};
