const { MENU, IMG } = require('./data');

function makeMenu() {
    const main = document.querySelector('.main__wrapper');
    let template = '<div class="menu">';
    MENU.forEach((node, index) => {
        template += `
        <div class="menu__topic ${index}">
            <span class="menu__summary">${node}</span>
            <img class="menu__img" src="${IMG[index]}">
        </div>
        `;
    })
    template += '</div>';
    main.innerHTML = template;
}

module.exports = {
    makeMenu,
}
