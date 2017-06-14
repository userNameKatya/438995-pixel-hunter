let timerId;

let time;

const timer = () => {
  const timerContainer = document.querySelector(`.js-timer`);

  timerId = setInterval(function () {
    time = parseInt(timerContainer.innerHTML, 10) - 1;
    if (time === 0) {
      clearInterval(timerId);
    }
    timerContainer.innerHTML = time;
  }, 1000);
};

export {timer, timerId, time};
