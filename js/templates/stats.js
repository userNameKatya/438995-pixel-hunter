import startOverTemplate from './start_over_template';
import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';

const stats = (data) => {
  const countQuantity = (array, value) => {
    return array.reduce(function (sum, it) {
      return sum + (it === value ? 1 : 0);
    }, 0);
  };

  const fastCount = countQuantity(data.gameStats, `fast`);
  const slowCount = countQuantity(data.gameStats, `slow`);
  const answerBonus = (countQuantity(data.gameStats, `correct`) + fastCount + slowCount) * 100;
  const livesBonus = data.lives * 50;
  const fastBonus = fastCount * 50;
  const fine = slowCount * 50;

  const element = getElementFromTemplate(`
    <header class="header">
      ${startOverTemplate}
    </header>
    <div class="result">
      <h1>Победа!</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${
                data.gameStats.map((stat) => {
                  return `<li class="stats__result stats__result--${stat}"></li>`;
                }).join(``)
              }
              ${
                new Array(data.totalRounds - data.gameStats.length)
                .fill(`<li class="stats__result stats__result--unknown"></li>`)
                .join(``)
              }
            </ul>
          </td>
          ${ data.lives > 0 ? `<td class="result__points">×&nbsp;100</td>` : `<td class="result__total"></td>`}
          ${ data.lives > 0 ? `<td class="result__total">${answerBonus}</td>` : `<td class="result__total  result__total--final">fail</td>`}
        </tr>
        ${ data.lives > 0 ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${fastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${fastBonus}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${data.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
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
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--wrong"></li>
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
    </div>
  `);

  changeScreen(element.cloneNode(true));
  startOver();
};

export default stats;
