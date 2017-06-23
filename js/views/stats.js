import startOverTemplate from '../templates/start_over_template';
import {AnswersDescribe} from '../data/constants';
import AbstractView from './abstract_view';
import footer from '../templates/footer';
import restart from '../utils/restart';

class StatsView extends AbstractView {
  get template() {
    const countQuantity = (array, value) => {
      return array.reduce(function (sum, it) {
        return sum + (it === value ? 1 : 0);
      }, 0);
    };

    const fastCount = countQuantity(this.data.gameStats, AnswersDescribe.FAST);
    const slowCount = countQuantity(this.data.gameStats, AnswersDescribe.SLOW);
    const answerBonus = (countQuantity(this.data.gameStats, AnswersDescribe.CORRECT) + fastCount + slowCount) * 100;
    const livesBonus = this.data.lives * 50;
    const fastBonus = fastCount * 50;
    const fine = slowCount * 50;

    return `<header class="header">
      ${startOverTemplate}
    </header>
    <div class="result">
      <h1>${this.data.lives > 0 ? `Победа!` : `Поражение`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${
                this.data.gameStats.map((stat) => {
                  return `<li class="stats__result stats__result--${stat}"></li>`;
                }).join(``)
              }
              ${
                new Array(this.data.totalRounds - this.data.gameStats.length)
                  .fill(`<li class="stats__result stats__result--unknown"></li>`)
                  .join(``)
              }
            </ul>
          </td>
          ${ this.data.lives > 0 ? `<td class="result__points">×&nbsp;100</td>` : `<td class="result__total"></td>`}
          ${ this.data.lives > 0 ? `<td class="result__total">${answerBonus}</td>` : `<td class="result__total  result__total--final">fail</td>`}
        </tr>
        ${ this.data.lives > 0 ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${fastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${fastBonus}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this.data.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${livesBonus}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${slowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">-${fine}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${answerBonus + livesBonus + fastBonus - fine}</td>
            </tr>` : ``
        }
      </table>
    </div>
    ${footer}`;
  }

  bind(elem) {
    restart(elem, this);
  }

  restart() {}
}

export default StatsView;
