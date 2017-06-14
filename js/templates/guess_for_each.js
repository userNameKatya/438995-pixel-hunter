import getCorrectAnswer from '../utils/get_correct_answer';
import {setCurrentState} from '../utils/set_current_state';
import getElementFromTemplate from '../utils/templating';
import {timer, timerId, time} from '../utils/timer';
import changeScreen from '../utils/change_screen';
import renderAnswer from '../utils/render_answer';
import resizeImage from '../utils/resize_image';
import startOver from '../utils/start_over';
import gameStats from './game_stats';
import game from '../data/data-game';
import header from './game_header';

const round = (data, state) => {
  const element = getElementFromTemplate(`
    ${header(state)}
    <div class="game">
      <p class="game__task">${data.task}</p>
      <form class="game__content">
        ${renderAnswer(data.option)}
      </form>
      ${gameStats(state)}
    </div>
  `);

  const cloneElement = element.cloneNode(true);
  const answers = [...cloneElement.querySelectorAll(`.js-answer`)];

  for (const answer of answers) {
    answer.addEventListener(`change`, function () {
      const answersGiven = document.querySelectorAll(`input[type="radio"]:checked`);

      if ([...answersGiven].length === 2) {
        clearInterval(timerId);
        const currentState = setCurrentState(state, getCorrectAnswer(data), time);
        game[currentState.currentRound].render(game[currentState.currentRound], currentState);
      }
    });
  }

  resizeImage(cloneElement);
  changeScreen(cloneElement);
  timer();
  startOver();
};

export default round;
