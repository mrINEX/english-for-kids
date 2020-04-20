const { Card } = require('./createCard');

const nodesGame = [];
const nodeStatistics = [];

function makeCards(array, typeCards) {
  const main = document.querySelector('.main__wrapper');
  nodesGame.length = 0;

  if (typeCards === 'train') {
    array.forEach((card, index) => {
      nodesGame.push(card);
      const newTrain = card.generateTrainCard();
      newTrain.setAttribute('data-num-card', `${index}`);
      main.append(newTrain);
    });
  }

  if (typeCards === 'play') {
    main.innerHTML = '<div class="wrapper-start"><button class="start-play">START PLAY</button></div>';
    array.forEach((card) => {
      nodesGame.push(card);
      const newPlay = card.generatePlayCard();
      main.append(newPlay);
    });
  }

  if (!nodeStatistics.length && typeCards === 'statistics') {
    const storage = JSON.parse(localStorage.getItem('statistics'));
    array.forEach((categoryArr, index) => {
      const category = [];
      for (let card = 0; card < categoryArr.length; card += 1) {
        const newNode = new Card(categoryArr[card]);
        if (storage) {
          newNode.statisticsStorage(storage[index][card]);
        }
        category.push(newNode);
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
