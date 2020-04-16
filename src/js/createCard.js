class Card {
  constructor({
    word, translation, image, audioSrc,
  }) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
  }

  generateTrainCard() {
    let template = '';
    const div = document.createElement('div');
    div.setAttribute('class', 'card card-train');
    div.setAttribute('data-song-card', `${this.audioSrc}`);
    div.setAttribute('data-translate-card', `${this.translation}`);
    template += `<img class="card__photo-train event-none" src="./src/assets/${this.image}">`;
    template += `<span class="card__word event-none">${this.word}</span>`;
    template += '<img class="card-switch" src="./src/assets/img/switch.png">';
    div.innerHTML = template;
    return div;
  }

  generatePlayCard() {
    let template = '';
    const div = document.createElement('div');
    div.setAttribute('class', 'card card-play');
    div.setAttribute('data-word-card', `${this.word}`);
    template += `<img class="card__photo-play event-none" src="./src/assets/${this.image}">`;
    div.innerHTML = template;
    return div;
  }

  sing() {
    const song = new Audio(`./src/assets/${this.audioSrc}`);
    song.play();
  }

  getWord() {
    return this.word;
  }
}

module.exports = {
  Card,
};
