import intro from '../templates/intro';

const startOver = (elem) => {
  const startOverBtn = elem.querySelector(`.js-start-over`) || document.querySelector(`.js-start-over`);

  startOverBtn.addEventListener(`click`, function (e) {
    intro();
  });
};

export default startOver;
