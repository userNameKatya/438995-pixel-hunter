(function () {
  const mainScreen = document.querySelector(`main.central`);
  const arrayTemplates = Array.from(document.querySelectorAll(`template`));
  const keyCodes = {leftArrow: 37, rightArrow: 39};
  let activeScreen;

  const changeScreen = function (index) {
    activeScreen = index;
    mainScreen.innerHTML = arrayTemplates[index].innerHTML;
  };

  changeScreen(0);

  document.addEventListener(`keydown`, function (event) {
    if (event.altKey) {
      if (event.keyCode === keyCodes.leftArrow) {
        if (activeScreen) {
          changeScreen(activeScreen - 1);
        }
        event.preventDefault();
      } else if (event.keyCode === keyCodes.rightArrow) {
        if (activeScreen < arrayTemplates.length - 1) {
          changeScreen(activeScreen + 1);
        }
        event.preventDefault();
      }
    }
  });
}());
