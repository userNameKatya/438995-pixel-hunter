import gameStats from '../templates/game_stats';
import resizeImage from '../utils/resize_image';
import header from '../templates/game_header';
import AbstractView from './abstract_view';
import footer from '../templates/footer';

class FindByTypeView extends AbstractView {
  get template() {
    return `${header(this.state)}
    <div class="game">
      <p class="game__task">${this.data.task}</p>
      <form class="game__content  game__content--triple">
        ${
          this.data.option.map((opt) => {
            return `<div class="game__option js-answer">
              <img src="${opt.img}" alt="Option 1" width="304" height="455">
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

    const answers = [...elem.querySelectorAll(`.js-answer`)];

    for (let answer of answers) {
      answer.addEventListener(`click`, (e) => {
        const src = e.target.querySelector(`img`).src;
        let trueAnswer = false;

        for (const it of this.data.option) {
          if (it.img === src && it.answers[0].trueAnswer) {
            trueAnswer = true;
          }
        }

        return trueAnswer;
      });
    }
  }
}

export default FindByTypeView;
