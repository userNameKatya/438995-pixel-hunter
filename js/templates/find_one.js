import getElementFromTemplate from '../utils/templating';
import {setCurrentState} from '../utils/set_current_state';
import {timer, timerId, time} from '../utils/timer';
import changeScreen from '../utils/change_screen';
import resizeImage from '../utils/resize_image';
import startOver from '../utils/start_over';
import gameStats from './game_stats';
import header from './game_header';
import stats from './stats';

const round = (data, state) => {
  const element = getElementFromTemplate(`
    ${header(state)}
    <div class="game">
      <p class="game__task">${data.task}</p>
      <form class="game__content  game__content--triple">
        ${
          data.option.map((opt) => {
            return `<div class="game__option js-answer">
              <img src="${opt.img}" alt="Option 1" width="304" height="455">
            </div>`;
          }).join(``)
        }
      </form>
      ${gameStats(state)}
    </div>
  `);

  const cloneElement = element.cloneNode(true);
  const answers = [...cloneElement.querySelectorAll(`.js-answer`)];

  for (let answer of answers) {
    answer.addEventListener(`click`, function (e) {
      clearInterval(timerId);
      const src = e.target.querySelector(`img`).src;
      let trueAnswer = false;

      for (const it of data.option) {
        if (it.img === src && it.answers[0].trueAnswer) {
          trueAnswer = true;
        }
      }

      stats(setCurrentState(state, trueAnswer, time));
    });
  }

  resizeImage(cloneElement);
  changeScreen(cloneElement);
  timer();
  startOver();
};

export default round;
