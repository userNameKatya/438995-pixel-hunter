import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import resizeImg from '../resize_img';
import game_stats from './game_stats';
import newGame from './game_2';
import header from './header';

const descriptionGame = {
  task: `Угадайте для каждого изображения фото или рисунок?`,
  type: ``,
  option: [
    {
      img: `https://k42.kn3.net/D2F0370D6.jpg`,
      answers: [
        {
          name: `option1`,
          value: `photo`,
          description: `Фото`,
          trueAnswer: false
        },
        {
          name: `option1`,
          value: `paint`,
          description: `Рисунок`,
          trueAnswer: true
        }
      ]
    }
  ],
  total_games: 10,
  game_stats: [`correct`]
};

const game = (data, state) => {
  const element = getElementFromTemplate(`
    ${header(state)}
    <div class="game">
      <p class="game__task">${data.task}</p>
      <form class="game__content">
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
    answer.addEventListener(`change`, function (e) {
      if ([...document.querySelectorAll(`input[type="radio"]:checked`)].length === 2) {
        newGame(descriptionGame, state);
      }
    });
  }

  resizeImg(cloneElement);
  changeScreen(cloneElement);
  startOver();
};

export default game;
