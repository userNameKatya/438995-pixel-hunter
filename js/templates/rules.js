import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import startOver from '../start_over';
import initialState from '../initial_state';
import game from './game_1';

const descriptionGame = {
  task: `Угадайте для каждого изображения фото или рисунок?`,
  type: ``,
  option: [
    {
      img: `https://k42.kn3.net/CF42609C8.jpg`,
      answers: [
        {
          name: `option1`,
          value: `photo`,
          description: `Фото`,
          trueAnswer: false
        },
        {
          name: `option1`,
          value: `paint`,
          description: `Рисунок`,
          trueAnswer: true
        }
      ]
    },
    {
      img: `http://i.imgur.com/1KegWPz.jpg`,
      answers: [
        {
          name: `option2`,
          value: `photo`,
          description: `Фото`,
          trueAnswer: true
        },
        {
          name: `option2`,
          value: `paint`,
          description: `Рисунок`,
          trueAnswer: false
        }
      ]
    }
  ]
};

const rules = () => {
  const element = getElementFromTemplate(`
    <header class="header">
      <div class="header__back js-start-over">
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
      <form class="rules__form js-form">
        <input class="rules__input js-input" type="text" placeholder="Ваше Имя">
        <button class="rules__button continue js-submit-btn" type="submit" disabled>Go!</button>
      </form>
    </div>
  `);

  const cloneElement = element.cloneNode(true);
  const submitBtn = cloneElement.querySelector(`.js-submit-btn`);
  const input = cloneElement.querySelector(`.js-input`);
  const form = cloneElement.querySelector(`.js-form`);

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
    game(descriptionGame, initialState);
  });

  changeScreen(cloneElement);
  input.focus();
  startOver();
};

export default rules;
