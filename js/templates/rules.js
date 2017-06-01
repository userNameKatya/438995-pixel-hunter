import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen.js';
import game from './game_1.js';

const element = getElementFromTemplate(`
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
`);

const submitBtn = element.content.querySelector(`.rules__button`);
const input = element.content.querySelector(`.rules__input`);
const form = element.content.querySelector(`.rules__form`);

input.addEventListener(`change`, function (e) {
  if (e.target.value.length) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  // Ajax
  changeScreen(game);
});

export default element.content;
