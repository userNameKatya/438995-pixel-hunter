import intro from './templates/intro';

const startOver = () => {
  const startOverBtn = document.querySelector(`.header__back`);

  startOverBtn.addEventListener(`click`, function (e) {
    intro();
  });
};

export default startOver;
