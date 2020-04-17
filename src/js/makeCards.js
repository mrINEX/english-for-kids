const { Card } = require('./createCard');

const nodesGame = [];
const nodeStatistics = [];

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

  if (!nodeStatistics.length && typeCards === 'statistics') {
    console.log('state arr');
    array.forEach((categoryArr) => {
      const category = [];
      for (let card = 0; card < categoryArr.length; card += 1) {
        category.push(new Card(categoryArr[card]));
      }
      nodeStatistics.push(category);
    });
  }
}

module.exports = {
  makeCards,
  nodesGame,
  nodeStatistics,
};
