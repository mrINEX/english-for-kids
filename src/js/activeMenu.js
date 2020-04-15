function removeActive(element) {
  document.querySelector(element).childNodes.forEach((node) => {
    if (node.classList) {
      node.classList.remove('border_play', 'border_train');
    }
  });
}

function setActive(bool, target) {
  if (bool) {
    target.parentNode.classList.add('border_play');
  } else {
    target.parentNode.classList.add('border_train');
  }
}

function setSwitch(element) {
  let position;
  document.querySelector(element).childNodes.forEach((node) => {
    if (node.classList) {
      if (node.classList.contains('border_play')) {
        node.classList.remove('border_play');
        node.classList.add('border_train');
        position = node.classList[1];
      } else if (node.classList.contains('border_train')) {
        node.classList.remove('border_train');
        node.classList.add('border_play');
        position = node.classList[1];
      }
    }
  });
  return position;
}

module.exports = {
  removeActive,
  setActive,
  setSwitch,
};
