const header = (data) => {
  const element = `<header class="header">
    <div class="header__back js-start-over">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${data.time}</h1>
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
