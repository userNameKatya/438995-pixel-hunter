import startOverTemplate from '../templates/start_over_template';
import {AnswersDescribe} from '../data/constants';
import AbstractView from './abstract_view';
import footer from '../templates/footer';
import restart from '../utils/restart';

class StatsView extends AbstractView {
  restart() {}

  get template() {
    const countQuantity = (array, value) => {
      return array.reduce(function (sum, it) {
        return sum + (it === value ? 1 : 0);
      }, 0);
    };

    this.data.reverse();

    return `<header class="header">
      ${startOverTemplate}
    </header>
    <div class="result">
      <h1>${this.data[0].lives > 0 ? `Победа!` : `Поражение`}</h1>
      ${
        this.data.map((item, index) => {
          return `<table class="result__table">
            <tr>
              <td class="result__number">${index + 1}.</td>
              <td colspan="2">
                <ul class="stats">
                  ${
                    item.stats.map((stat) => {
                      return `<li class="stats__result stats__result--${stat}"></li>`;
                    }).join(``)
                  }
                </ul>
              </td>
              ${ item.lives > 0 ? `<td class="result__points">×&nbsp;100</td>` : `<td class="result__total"></td>`}
              ${ item.lives > 0 ? `<td class="result__total">${(countQuantity(item.stats, AnswersDescribe.CORRECT) + countQuantity(item.stats, AnswersDescribe.FAST) + countQuantity(item.stats, AnswersDescribe.SLOW)) * 100}</td>` : `<td class="result__total  result__total--final">fail</td>`}
            </tr>
            ${ item.lives > 0 ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${countQuantity(item.stats, AnswersDescribe.FAST)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${countQuantity(item.stats, AnswersDescribe.FAST) * 50}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${item.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${item.lives * 50}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${countQuantity(item.stats, AnswersDescribe.SLOW)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">-${countQuantity(item.stats, AnswersDescribe.SLOW) * 50}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${(countQuantity(item.stats, AnswersDescribe.CORRECT) + countQuantity(item.stats, AnswersDescribe.FAST) + countQuantity(item.stats, AnswersDescribe.SLOW)) * 100 + item.lives * 50 + countQuantity(item.stats, AnswersDescribe.FAST) * 50 - countQuantity(item.stats, AnswersDescribe.SLOW) * 50}</td>
            </tr>` : ``
            }
        </table>`;
        }).join(``)
      }
    </div>
    ${footer}`;
  }

  bind(elem) {
    restart(elem, this);
  }
}

export default StatsView;
