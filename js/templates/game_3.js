import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import stats from './stats';

const game = () => {
  const element = getElementFromTemplate(`
    <header class="header">
      <div class="header__back js-start-over">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      </div>
    </header>
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
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
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
