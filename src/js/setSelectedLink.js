function setNavigation(list, target, border) {
  document.querySelector(list).childNodes.forEach((node) => {
    if (node.classList && node.classList.contains(`${target.parentNode.classList[1]}`)) {
      node.classList.add(border);
    }
  });
}

module.exports = {
  setNavigation,
};
