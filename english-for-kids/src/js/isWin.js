const win = {
  yes() {
    const div = document.createElement('div');
    div.setAttribute('class', 'win-message');
    const template = `
        <h1>Success you decided everything right</h1>
        <img src='./src/assets/img/win-smile.jpg'>
    `;
    div.innerHTML = template;
    document.querySelector('.main__wrapper').append(div);
  },
  no(num) {
    const div = document.createElement('div');
    div.setAttribute('class', 'not-win-message');
    const template = `
        <h1>You had mistakes, ${num} times..</h1>
        <img src='./src/assets/img/sad-smile.jpg'>
    `;
    div.innerHTML = template;
    document.querySelector('.main__wrapper').append(div);
  },
};

module.exports = {
  win,
};
