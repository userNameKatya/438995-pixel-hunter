import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import game_stats from './game_stats';
import resizeImg from '../resize_img';
import newGame from './game_3';
import header from './header';

const descriptionGame = {
  task: `Найдите рисунок среди изображений?`,
  type: ``,
  option: [
    {
      img: `https://k32.kn3.net/5C7060EC5.jpg`,
      answers: [
        {
          name: `option1`,
          value: `paint`,
          description: `Рисунок`,
          trueAnswer: true
        }
      ]
    },
    {
      img: `https://i.imgur.com/DiHM5Zb.jpg`,
      answers: [
        {
          name: `option1`,
          value: `photo`,
          description: `Фото`,
          trueAnswer: false
        }
      ]
    },
    {
      img: `http://i.imgur.com/DKR1HtB.jpg`,
      answers: [
        {
          name: `option1`,
          value: `photo`,
          description: `Фото`,
          trueAnswer: false
        }
      ]
    }
  ],
  total_games: 10,
  game_stats: [`correct`, `wrong`]
};

const game = (data, state) => {
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
                </label>`
                }).join(``)
              }
            </div>`
          }).join(``)
        }
      </form>
      ${game_stats(state)}
    </div>
  `);

  const cloneElement = element.cloneNode(true);
  const answers = [...cloneElement.querySelectorAll(`.js-answer`)];

  for (let answer of answers) {
    answer.addEventListener(`click`, function (e) {
      e.preventDefault();
      newGame(descriptionGame, state);
    });
  }

  resizeImg(cloneElement);
  changeScreen(cloneElement);
  startOver();
};

export default game;
