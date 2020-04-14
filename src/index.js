require('./js/createPage');
const { handlerMenu } = require('./js/handlerMenu');
const { makeCards } = require('./js/makeCards');
const { makeMenu } = require('./js/makeMenu');
const { isPlay } = require('./js/isPlay');
const { data } = require('./js/data');

window.onload = () => {
    makeMenu();

    // makeCards(data[0], 'train');
    // makeCards(data[0], 'play');
    handlerMenu(document.querySelector('.hamburger'), document.querySelector('.navigation'));
    document.querySelector('input').addEventListener('change', ({target}) => {
        if(target.checked) {
            console.log('play');
            // document.querySelector('.main__wrapper').innerHTML = '';
        } else {
            console.log('train');
            // document.querySelector('.main__wrapper').innerHTML = '';
        }
    });
    document.addEventListener('click', ({target}) => {
        if (target.parentNode.classList.contains('menu__topic')) {
            if (isPlay()) {
                document.querySelector('.navigation').classList.remove('navigation-show');
                document.querySelector('.hamburger').classList.remove('hamburger-open');
                document.querySelector('.main__wrapper').innerHTML = '';

                // target.classList.add('border_play');
                makeCards(data[target.parentNode.classList[1]], 'play');
                
            } else {
                document.querySelector('.navigation').classList.remove('navigation-show');
                document.querySelector('.hamburger').classList.remove('hamburger-open');
                document.querySelector('.main__wrapper').innerHTML = '';

                // target.classList.add('border_train');
                makeCards(data[target.parentNode.classList[1]], 'train');
            }
        }
        if (target.classList.contains('menu__nav')) {
            document.querySelector('.navigation').classList.remove('navigation-show');
            document.querySelector('.hamburger').classList.remove('hamburger-open');
            document.querySelector('.main__wrapper').innerHTML = '';
            makeMenu();
        }
    })
}
