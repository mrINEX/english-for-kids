const { Card } = require('./createCard');

const nodesGame = [];

function makeCards(array, typeCards) {
  const main = document.querySelector('.main__wrapper');
  nodesGame.length = 0;

  if (typeCards === 'train') {
    array.forEach((card, index) => {
      const instansTrain = new Card(card);
      nodesGame.push(instansTrain);
      const newTrain = instansTrain.generateTrainCard();
      newTrain.setAttribute('data-num-card', `${index}`);
      main.append(newTrain);
    });
  }

  if (typeCards === 'play') {
    main.innerHTML = '<div class="wrapper-start"><button class="start-play">START PLAY</button></div>';
    array.forEach((card) => {
      const instansPlay = new Card(card);
      nodesGame.push(instansPlay);
      const newPlay = instansPlay.generatePlayCard();
      main.append(newPlay);
    });
  }
}

module.exports = {
  makeCards,
  nodesGame,
};
