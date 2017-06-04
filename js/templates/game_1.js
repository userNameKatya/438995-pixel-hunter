import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import game_stats from './game_stats';
import newGame from './game_2';
import header from './header';

const initialState = {
  time: 0,
  lives: 3
};

const game = (data) => {
  const element = getElementFromTemplate(`
    ${header(initialState)}
    <div class="game">
      <p class="game__task">${data.task}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo js-answer">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint js-answer">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo js-answer">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint js-answer">
            <input name="question2" type="radio" value="paint">
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
    answer.addEventListener(`change`, function (e) {
      if ([...document.querySelectorAll(`input[type="radio"]:checked`)].length === 2) {
        newGame();
      }
    });
  }

  changeScreen(cloneElement);
  startOver();
};

export default game;
