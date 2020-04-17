const audio = {
  correct() {
    return new Audio('./src/assets/audio/correct.mp3');
  },

  success() {
    return new Audio('./src/assets/audio/success.mp3');
  },

  failure() {
    return new Audio('./src/assets/audio/failure.mp3');
  },

  error() {
    return new Audio('./src/assets/audio/error.mp3');
  },
};

module.exports = {
  audio,
};
