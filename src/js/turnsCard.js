function turnsCard(target) {
  const card = target.parentNode;
  card.classList.add('card-switch-active');
  const word = card.children[1].innerHTML;
  const btn = card.children[2];
  setTimeout(() => {
    btn.remove();
    card.children[1].classList.add('card-switch-active');
    card.children[1].innerHTML = card.getAttribute('data-translate-card');
  }, 200);
  card.onmouseleave = () => {
    card.classList.remove('card-switch-active');
    setTimeout(() => {
      card.append(btn);
      card.children[1].classList.remove('card-switch-active');
      card.children[1].innerHTML = word;
    }, 200);
  };
}

module.exports = {
  turnsCard,
};
