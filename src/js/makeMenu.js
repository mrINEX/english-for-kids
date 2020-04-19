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
  main.innerHTML = template;
}

module.exports = {
  makeMenu,
  makeStatistics,
};
