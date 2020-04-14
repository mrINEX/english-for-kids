function handlerMenu(hamburger, nav) {
    hamburger.addEventListener('click', () => {
        if(nav.classList.contains('navigation-show')) {
            nav.classList.remove('navigation-show');
            hamburger.classList.remove('hamburger-open');
        } else {
            nav.classList.add('navigation-show');
            hamburger.classList.add('hamburger-open');
        }
    });
}

module.exports = {
    handlerMenu,
}
