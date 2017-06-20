let timerId;

let time;

const timer = (elem, view) => {
  const timerContainer = elem.querySelector(`.js-timer`);

  timerId = setInterval(function () {
    time = parseInt(timerContainer.innerHTML, 10) - 1;
    if (time === 0) {
      clearInterval(timerId);
      view.onAnswer(null);
    }
    timerContainer.innerHTML = time;
  }, 1000);
};

export {timer, timerId, time};
