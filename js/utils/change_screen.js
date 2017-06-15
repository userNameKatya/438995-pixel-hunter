import footer from '../templates/footer';

const mainScreen = document.querySelector(`.js-main-screen`);

const changeScreen = function (screen) {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
  mainScreen.appendChild(footer.cloneNode(true));
};

export default changeScreen;
