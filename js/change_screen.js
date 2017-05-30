const mainScreen = document.getElementById(`main`);

const changeScreen = function (screen) {
  Array.from(mainScreen.childNodes).forEach(function (item) {
    mainScreen.removeChild(item);
  });

  mainScreen.appendChild(screen);
};

export default changeScreen;
