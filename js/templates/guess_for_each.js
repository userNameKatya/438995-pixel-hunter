import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import renderAnswer from '../render_answer';
import resizeImage from '../resize_image';
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

  for (let answer of answers) {
    answer.addEventListener(`change`, function (e) {
      if ([...document.querySelectorAll(`input[type="radio"]:checked`)].length === 2) {
        game[state.currentRound + 1].render(game[state.currentRound + 1], state);
      }
    });
  }

  resizeImage(cloneElement);
  changeScreen(cloneElement);
  startOver();
};

export default round;
