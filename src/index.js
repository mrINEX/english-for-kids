import('./js/createPage');
const { makeCards } = require('./js/makeCards');
const { makeMenu } = require('./js/makeMenu');
const { data } = require('./js/data');

window.onload = () => {
    makeMenu('mobile');

    // makeMenu('laptop');
    makeCards(data[0], 'train');
    // makeCards(data[0], 'play');
}
