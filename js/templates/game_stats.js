const stats = (data) => {
  const element = `<div class="stats">
    <ul class="stats">
      ${
        data.gameStats.map((stat) => {
          return `<li class="stats__result stats__result--${stat}"></li>`;
        }).join(``)
      }
      ${
        new Array(data.totalGames - data.gameStats.length)
        .fill(`<li class="stats__result stats__result--unknown"></li>`)
        .join(``)
      }
    </ul>
  </div>`;

  return element;
};

export default stats;
