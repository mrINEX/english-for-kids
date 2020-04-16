const { Card } = require('./createCard');

function makeCards(array, typeCards) {
  const main = document.querySelector('.main__wrapper');

  if (typeCards === 'train') {
    array.forEach((card, index) => {
      const instansTrain = new Card(card);

      const newTrain = instansTrain.generateTrainCard();
      newTrain.setAttribute('data-num-card', `${index}`);
      main.append(newTrain);
    });
  }

  if (typeCards === 'play') {
    main.innerHTML = '<button class="start-play">START PLAY</button>';
    array.forEach((card, index) => {
      const instansPlay = new Card(card);

      const newPlay = instansPlay.generatePlayCard();
      newPlay.setAttribute('data-num-card', `${index}`);
      main.append(newPlay);
    });
  }
}

module.exports = {
  makeCards,
};
