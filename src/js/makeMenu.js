const MENU = ['Universe', 'Car', 'Action level 1', 'Action level 2', 'Animal level 1', 'Animal level 2', 'Clothes', 'Emotions'];
const IMG = ['/src/assets/img/menu/univers.png', '/src/assets/img/menu/car.png', '/src/assets/img/jump.jpg', '/src/assets/img/ride.jpg', '/src/assets/img/dog.jpg', '/src/assets/img/dolphin.jpg', '/src/assets/img/coat.jpg', '/src/assets/img/smile.jpg'];

function makeMenu(version) {
    const main = document.querySelector('.main__wrapper');
    const mainMobile = document.querySelector('.navigation');
    let template = '<div class="menu">';
    MENU.forEach((node, index) => {
        template += `
        <div class="menu__topic">
            <span class="menu__summary">${node}</span>
            <img class="menu__img" src="${IMG[index]}">
        </div>
        `;
    })
    template += '</div>';

    if (version === 'laptop') {
        main.innerHTML = template;
    }
    if (version === 'mobile') {
        mainMobile.innerHTML = template;
    }

}

module.exports = {
    makeMenu,
}
