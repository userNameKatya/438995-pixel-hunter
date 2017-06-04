import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import game_stats from './game_stats';
import newGame from './game_3';
import header from './header';

const game = () => {
  const element = getElementFromTemplate(`
    ${header()}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo js-answer">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide game__answer--paint js-answer">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      ${game_stats()}
    </div>
  `);

  const cloneElement = element.cloneNode(true);
  const answers = [...cloneElement.querySelectorAll(`.js-answer`)];

  for (let answer of answers) {
    answer.addEventListener(`click`, function (e) {
      e.preventDefault();
      newGame();
    });
  }

  changeScreen(cloneElement);
  startOver();
};

export default game;
