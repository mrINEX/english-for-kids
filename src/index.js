require('./js/createPage');
const { setSelectedLink } = require('./js/setSelectedLink');
const { hideNavigation, removeContent } = require('./js/hideNavigation');
const { removeActive, setActive, setSwitch } = require ('./js/activeMenu');
const { handlerMenu } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { makeMenu } = require('./js/makeMenu');
const { isPlay } = require('./js/isPlay');
const { data } = require('./js/data');

window.onload = () => {
    makeMenu();
    handlerMenu(document.querySelector('.hamburger'), document.querySelector('.navigation'));

    document.querySelector('input').addEventListener('change', ({target}) => {
        let position = setSwitch('.menu');
        if(target.checked) {
            if (isFinite(position)) {
                removeContent('.main__wrapper');
                makeCards(data[position], 'play');
            }
        } else {
            if (isFinite(position)) {
                removeContent('.main__wrapper');
                makeCards(data[position], 'train');
            }
        }
    });

    document.addEventListener('click', ({target}) => {
        if (target.parentNode.classList.contains('menu__topic')) {

            removeActive('.menu');
            hideNavigation(document.querySelector('.navigation'), document.querySelector('.hamburger'));

            if (isPlay()) {
                setSelectedLink('.menu', target, 'border_play');
                makeCards(data[target.parentNode.classList[1]], 'play');
            } else {
                setSelectedLink('.menu', target, 'border_train');
                makeCards(data[target.parentNode.classList[1]], 'train');
            }
        }
        if (target.parentNode.classList.contains('menu__nav')) {

            hideNavigation(document.querySelector('.navigation'), document.querySelector('.hamburger'));
            removeActive('.menu');
            setActive(isPlay(), target);
            makeMenu();
        }
    })
}
