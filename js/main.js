(function () {
  const mainScreen = document.querySelector(`main.central`);
  const arrayTemplates = Array.from(document.querySelectorAll(`template`));
  const enumeration = {leftArrow: 37, rightArrow: 39};
  let activeScreen;

  const changeScreen = function (index) {
    activeScreen = index;
    mainScreen.innerHTML = arrayTemplates[index].innerHTML;
  };

  setTimeout(function () {
    changeScreen(0);
  }, 1000);

  document.addEventListener(`keydown`, function (event) {
    if (event.altKey) {
      if (event.keyCode === enumeration.leftArrow) {
        if (!!activeScreen) {
          changeScreen(activeScreen - 1);
        }
        event.preventDefault();
      } else if (event.keyCode === enumeration.rightArrow) {
        if (activeScreen < arrayTemplates.length - 1) {
          changeScreen(activeScreen + 1);
        }
        event.preventDefault();
      }
    }
  });
}());
