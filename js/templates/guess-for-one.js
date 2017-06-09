import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import gameStats from './game_stats';
import resizeImage from '../resize_image';
import header from './header';
import game from '../game';

const round = (data, state) => {
  const element = getElementFromTemplate(`
    ${header(state)}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        ${
          data.option.map((opt) => {
            return `<div class="game__option">
              <img src="${opt.img}" alt="Option 1" class="js-image">
              ${
                opt.answers.map((answer) => {
                  return `<label class="game__answer game__answer--${answer.value} js-answer">
                    <input name="${answer.name}" type="radio" value="${answer.value}">
                    <span>${answer.description}</span>
                  </label>`;
                }).join(``)
              }
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
      game[state.currentRound + 2].type(game[state.currentRound + 2], state);
    });
  }

  resizeImage(cloneElement);
  changeScreen(cloneElement);
  startOver();
};

export default round;
