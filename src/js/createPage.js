let header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerHTML = `
    <div class="wrapper header__wrapper">
        <span class="hamburger">
            <span class="hamburger__line"></span>
        </span>
    </div>
`;
document.querySelector('body').append(header);