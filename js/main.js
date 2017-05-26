(function () {
  const mainScreen = document.querySelector(`main.central`);
  const arrayTemplates = Array.prototype.slice.call(document.querySelectorAll(`template`));
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
      if (event.keyCode === 37) {
        if (activeScreen) {
          changeScreen(activeScreen - 1);
        }
        event.preventDefault();
      } else if (event.keyCode === 39) {
        if (activeScreen < arrayTemplates.length - 1) {
          changeScreen(activeScreen + 1);
        }
        event.preventDefault();
      }
    }
  });
}());
