import startOverTemplate from './start_over_template';

const header = (data) => {
  const element = `<header class="header">
    ${startOverTemplate}
    <h1 class="game__timer js-timer">${data.time}</h1>
    <div class="game__lives">
      ${
        new Array(3 - data.lives)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)
      }
      ${
        new Array(data.lives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)
      }
    </div>
  </header>`;

  return element;
};

export default header;
