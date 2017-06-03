import intro from './templates/intro';

const startOver = () => {
  const startOverBtn = document.querySelector(`.js-start-over`);

  startOverBtn.addEventListener(`click`, function (e) {
    intro();
  });
};

export default startOver;
