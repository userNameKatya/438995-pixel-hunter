import {resizeImage} from '../utils/resize_image';
import gameStats from '../templates/game_stats';
import header from '../templates/game_header';
import AbstractView from './abstract_view';
import footer from '../templates/footer';
import restart from '../utils/restart';

class FindByTypeView extends AbstractView {

  get template() {
    return `${header(this.state)}
    <div class="game">
      <p class="game__task">${this.data.task}</p>
      <form class="game__content  game__content--triple">
        ${
          this.data.option.map((opt, index) => {
            return `<button type="button" class="game__option js-answer">
              <img class="js-image" src="${opt.img}" alt="Option ${index + 1}">
            </button>`;
          }).join(``)
        }
      </form>
      ${gameStats(this.state)}
    </div>
    ${footer}`;
  }

  onAnswer() {}

  restart() {}

  bind(elem) {
    resizeImage(elem, this.data.type);
    restart(elem, this);

    const answers = [...elem.querySelectorAll(`.js-answer`)];

    for (const answer of answers) {
      answer.addEventListener(`click`, (e) => {
        const src = e.target.querySelector(`img`).src;

        this.onAnswer(src);
      });
    }
  }
}

export default FindByTypeView;
