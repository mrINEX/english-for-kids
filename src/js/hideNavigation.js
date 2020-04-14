function hideNavigation(one, two) {
    document.querySelector(one).classList.remove(one);
    document.querySelector(two).classList.remove(two);
}

module.exports = {
    hideNavigation,
}
