import getElementFromTemplate from '../templating';
import setCurrentState from '../set_current_state';
import changeScreen from '../change_screen';
import renderAnswer from '../render_answer';
import resizeImage from '../resize_image';
import {timer, timerId, time} from '../timer';
import startOver from '../start_over';
import gameStats from './game_stats';
import header from './game_header';
import game from '../game';

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

        let trueAnswersCount = 0;

        for (const it of answersGiven) {
          const index = Number(it.name.replace(/\D+/ig, ``)) - 1;
          const [firstOption, secondOption] = data.option[index].answers;
          const trueAnswer = firstOption.trueAnswer ? firstOption : secondOption;

          if (trueAnswer.name === it.name && trueAnswer.value === it.value) {
            ++trueAnswersCount;
          }
        }
        const currentState = setCurrentState(state, trueAnswersCount === 2 ? true : false, time);
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
