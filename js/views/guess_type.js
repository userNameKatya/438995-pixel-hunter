import {timer, timerId, time} from '../utils/timer';
import gameStats from '../templates/game_stats';
import resizeImage from '../utils/resize_image';
import header from '../templates/game_header';
import AbstractView from './abstract_view';
import footer from '../templates/footer';
import restart from '../utils/restart';

class GuessForEachView extends AbstractView {
  get template() {
    return `${header(this.state)}
    <div class="game">
      <p class="game__task">${this.data.task}</p>
      <form class="game__content">
        ${
            this.data.option.map((opt) => {
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
      ${gameStats(this.state)}
    </div>
    ${footer}`;
  }

  bind(elem) {
    resizeImage(elem);
    restart(elem, this);
    timer(elem, this);

    const answers = [...elem.querySelectorAll(`.js-answer`)];

    for (const answer of answers) {
      answer.addEventListener(`change`, () => {
        const answersGiven = document.querySelectorAll(`input[type="radio"]:checked`);

        if ([...answersGiven].length === answers.length / 2) {
          clearInterval(timerId);
          this.onAnswer([...answersGiven], time);
        }
      });
    }
  }

  onAnswer() {}

  restart() {}
}

export default GuessForEachView;
