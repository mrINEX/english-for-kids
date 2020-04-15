function hideNavigation(one, two) {
    one.classList.remove('navigation-show');
    two.classList.remove('hamburger-open');

    // removePage
    document.querySelector('.main__wrapper').innerHTML = '';
}

function removeContent(element) {
    document.querySelector(element).innerHTML = '';
}

module.exports = {
    hideNavigation,
    removeContent,
}
