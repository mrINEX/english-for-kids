function getIcon(bool) {
  const img = document.createElement('img');
  if (bool) {
    img.setAttribute('class', 'icon');
    img.setAttribute('src', './src/assets/img/yes.jpg');
    return img;
  }
  img.setAttribute('class', 'icon');
  img.setAttribute('src', './src/assets/img/no.jpg');
  return img;
}

module.exports = {
  getIcon,
};
