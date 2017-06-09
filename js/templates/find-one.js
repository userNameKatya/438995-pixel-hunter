import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import gameStats from './game_stats';
import resizeImage from '../resize_image';
import header from './header';
import game from '../game';
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
      e.preventDefault();
      stats();
    });
  }

  resizeImage(cloneElement);
  changeScreen(cloneElement);
  startOver();
};

export default round;
