function startPlay(target) {
  const img = document.createElement('img');
  img.setAttribute('src', './src/assets/img/switch.png');
  img.setAttribute('class', 'sing-again');

  const div = document.createElement('div');
  div.setAttribute('class', 'range-statistic');

  target.after(div);
  target.after(img);
  target.remove();
  return img;
}

module.exports = {
  startPlay,
};
