const restart = (elem, view) => {
  const restartButton = elem.querySelector(`.js-start-over`);

  restartButton.addEventListener(`click`, (e) => {
    view.restart();
  });
};

export default restart;
