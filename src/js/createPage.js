let menuMobile = document.createElement('nav');
menuMobile.setAttribute('class', 'navigation');
document.querySelector('body').append(menuMobile);

let header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerHTML = `
    <div class="wrapper header__wrapper">
        <div class="hamburger">
            <div class="hamburger__line"></div>
        </div>
        <div class="switch">
            <span class="switch__slider"></span>
        </div>
    </div>
`;
document.querySelector('body').append(header);

let main = document.createElement('main');
main.setAttribute('class', 'main');
main.innerHTML = `
    <div class="wrapper main__wrapper"></div>
`;
document.querySelector('body').append(main);