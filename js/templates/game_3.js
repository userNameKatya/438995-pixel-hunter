import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import game_stats from './game_stats';
import header from './header';
import stats from './stats';

const game = () => {
  const element = getElementFromTemplate(`
    ${header()}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option js-answer">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option game__option--selected js-answer">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option js-answer">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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
      stats();
    });
  }

  changeScreen(cloneElement);
  startOver();
};

export default game;
