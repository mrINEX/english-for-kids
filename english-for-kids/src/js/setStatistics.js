function increment(arr, target, state) {
  arr.forEach((node) => {
    for (let word = 0; word < node.length; word += 1) {
      if (node[word].getWord() === target.getAttribute('data-word-card')) {
        node[word].incrementNode(state);
      }
    }
  });
}

function incrementPlay(arr, name, state) {
  arr.forEach((node) => {
    for (let word = 0; word < node.length; word += 1) {
      if (node[word].getWord() === name) {
        node[word].incrementNode(state);
      }
    }
  });
}

module.exports = {
  increment,
  incrementPlay,
};
