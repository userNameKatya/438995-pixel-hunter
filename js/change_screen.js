import footer from './templates/footer.js';

const mainScreen = document.querySelector(`main.central`);

const changeScreen = function (screen) {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
  mainScreen.appendChild(footer);
};

export default changeScreen;
