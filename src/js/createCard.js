class Card {
    constructor({word, translation, image, audioSrc}) {
       this.word = word;
       this.translation = translation;
       this.image = image;
       this.audioSrc = audioSrc;
    }

    generateTrainCard() {
        let template = '';
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        template += `<img class="card__photo-train" src="./src/assets/${this.image}">`;
        template += `<span class="card__word">${this.word}</span>`;
        div.innerHTML = template;
        return div;
    }

    generatePlayCard() {
        let template = '';
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        template += `<img class="card__photo-play" src="./src/assets/${this.image}">`;
        div.innerHTML = template;
        return div;
    }
}

module.exports = {
    Card,
}
