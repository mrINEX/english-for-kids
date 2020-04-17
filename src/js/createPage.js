const { MENU, IMG } = require('./data');

const menuMobile = document.createElement('nav');
menuMobile.setAttribute('class', 'navigation');

let template = '<div class="menu">';
template += '<div class="menu__nav border_train"><div>MENU</div></div>';
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
menuMobile.innerHTML = template;

document.querySelector('body').append(menuMobile);

const header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerHTML = `
    <div class="wrapper header__wrapper">
        <div class="hamburger">
            <div class="hamburger__line"></div>
        </div>
        <label class="switch">
            <input type="checkbox">
            <span class="switch__slider"></span>
        </label>
    </div>
`;
document.querySelector('body').append(header);

const main = document.createElement('main');
main.setAttribute('class', 'main');
main.innerHTML = `
    <div class="wrapper main__wrapper"></div>
`;
document.querySelector('body').append(main);
