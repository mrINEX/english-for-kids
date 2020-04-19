const { MENU, IMG } = require('./data');

function makeMenu() {
  const main = document.querySelector('.main__wrapper');
  let template = '<div class="menu">';
  template += '<div class="menu__statistics"><div class="event-none">STATISTICS</div></div>';
  MENU.forEach((node, index) => {
    template += `
        <div class="menu__topic ${index}">
            <span class="menu__summary">${node}</span>
            <img class="menu__img" src="${IMG[index]}">
        </div>
        `;
  });
  template += '</div>';
  main.innerHTML = template;
}

function makeStatistics(arr) {
  const main = document.querySelector('.main__wrapper');
  main.innerHTML = `
  <div class="sort-wrapper">
    <button class="sort">sort alphabet</button>
    <button class="rate">sort error rate</button>
    <button class="train-click">sort train</button>
    <button class="play-success">sort play success</button>
  </div>`;
  let template = '<div class="statistics">';
  MENU.forEach((node, index) => {
    template += `
    <div class="statistics__category ${index}">
      <h2 class="statistics__name">${node}</h2>
    `;
    for (let i = 0; i < arr[index].length; i += 1) {
      template += arr[index][i].getStatistics();
    }
    template += '</div>';
  });
  template += '</div>';
  main.innerHTML += template;
}

function sortStatistics(nodes, type, reverse) {
  const statistics = document.querySelector('.statistics');
  let template = '<div class="statistics">';
  MENU.forEach((node, index) => {
    template += `
    <div class="statistics__category ${index}">
      <h2 class="statistics__name">${node}</h2>
    `;
    const current = nodes[index].slice();
    if (type === 'alphabet') {
      if (reverse === 'reverse') {
        current.sort((a, b) => a.getWord().localeCompare(b.getWord()));
      } else {
        current.sort((a, b) => a.getWord().localeCompare(b.getWord())).reverse();
      }
    }
    if (type === 'errorRate') {
      if (reverse === 'reverse') {
        current.sort((a, b) => a.getErrorRate() - b.getErrorRate());
      } else {
        current.sort((a, b) => a.getErrorRate() - b.getErrorRate()).reverse();
      }
    }
    if (type === 'trainNumber') {
      if (reverse === 'reverse') {
        current.sort((a, b) => a.getCountTrain() - b.getCountTrain());
      } else {
        current.sort((a, b) => a.getCountTrain() - b.getCountTrain()).reverse();
      }
    }
    if (type === 'playSuccess') {
      if (reverse === 'reverse') {
        current.sort((a, b) => a.getPlaySuccess() - b.getPlaySuccess());
      } else {
        current.sort((a, b) => a.getPlaySuccess() - b.getPlaySuccess()).reverse();
      }
    }

    for (let i = 0; i < current.length; i += 1) {
      template += current[i].getStatistics();
    }
    template += '</div>';
  });
  template += '</div>';
  statistics.innerHTML = template;
}

module.exports = {
  makeMenu,
  makeStatistics,
  sortStatistics,
};
