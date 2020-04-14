const { Card } = require('./createCard');

function makeCards(array, typeCards) {
    const main = document.querySelector('.main__wrapper');

    if (typeCards === 'train') {
        array.forEach( card => {
            main.append( new Card(card).generateTrainCard() );
        });
    }

    if (typeCards === 'play') {
        array.forEach( card => {
            main.append( new Card(card).generatePlayCard() );
        });
    }
}

module.exports = {
    makeCards,
}
