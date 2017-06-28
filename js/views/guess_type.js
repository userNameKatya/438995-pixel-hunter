import {resizeImage} from '../utils/resize_image';
import gameStats from '../templates/game_stats';
import {QuestionType} from '../data/constants';
import header from '../templates/game_header';
import AbstractView from './abstract_view';
import footer from '../templates/footer';
import restart from '../utils/restart';

class GuessForEachView extends AbstractView {
  get template() {
    return `${header(this.state)}
    <div class="game">
      <p class="game__task">${this.data.task}</p>
      <form class="game__content ${this.data.type === QuestionType.TINDER_LIKE ? `game__content--wide` : ``}">
        ${
            this.data.option.map((opt, index) => {
              return `<div class="game__option">
                <img class="js-image" src="${opt.img}" alt="Option ${index + 1}">
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
      ${gameStats(this.state)}
    </div>
    ${footer}`;
  }

  bind(elem) {
    resizeImage(elem, this.data.type);
    restart(elem, this);

    const answers = [...elem.querySelectorAll(`.js-answer`)];

    for (const answer of answers) {
      answer.addEventListener(`change`, (e) => {
        const answersGiven = document.querySelectorAll(`input[type="radio"]:checked`);
        const name = e.target.name;

        for (const it of document.querySelectorAll(`[name=${name}]`)) {
          it.disabled = true;
        }

        if ([...answersGiven].length === answers.length / 2) {
          this.onAnswer([...answersGiven]);
        }
      });
    }
  }

  onAnswer() {}

  restart() {}
}

export default GuessForEachView;
