class Card {
  constructor({
    word, translation, image, audioSrc,
  }) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
    this.countTrain = 0;
    this.countPlayYes = 0;
    this.countPlayNo = 0;
    this.errorRate = 0;
  }

  statisticsState() {
    return [this.countTrain, this.countPlayYes, this.countPlayNo, this.errorRate];
  }

  statisticsStorage([a, b, c, d]) {
    this.countTrain = a;
    this.countPlayYes = b;
    this.countPlayNo = c;
    this.errorRate = d;
  }

  incrementNode(node) {
    if (node === 'train') {
      this.countTrain += 1;
    }
    if (node === 'playYes') {
      this.countPlayYes += 1;
      if (this.countPlayYes > 0 && this.countPlayNo > 0) {
        this.errorRate = Math.round(100 - ((this.countPlayYes / this.countPlayNo) * 100));
      }
    }
    if (node === 'playNo') {
      this.countPlayNo += 1;
      if (this.countPlayYes > 0 && this.countPlayNo > 0) {
        this.errorRate = Math.round(100 - ((this.countPlayYes / this.countPlayNo) * 100));
      }
    }
  }

  generateTrainCard() {
    let template = '';
    const div = document.createElement('div');
    div.setAttribute('class', 'card card-train');
    div.setAttribute('data-word-card', `${this.word}`);
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

  getStatistics() {
    return (`<div class="category">
      <span>${this.word}</span>
      <div class="wrapper-count">
        <div class="train"> train number: ${this.countTrain}</div>
        <div class="play"> play number success: ${this.countPlayYes}</div>
        <div class="play"> 
          play number failure: ${this.countPlayNo}
          <span>${this.errorRate}%</span>
        </div>
      </div>
      <span>${this.translation}</span>
    </div>`);
  }
}

module.exports = {
  Card,
};
