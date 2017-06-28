import startOverTemplate from '../templates/start_over_template';
import AbstractView from './abstract_view';
import footer from '../templates/footer';
import restart from '../utils/restart';

class RulesView extends AbstractView {
  get template() {
    return `<header class="header">
        ${startOverTemplate}
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
        <input class="rules__input js-input" type="text" placeholder="Ваше Имя" autofocus>
        <button class="rules__button continue js-submit-btn" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`;
  }

  bind(elem) {
    restart(elem, this);

    const submitBtn = elem.querySelector(`.js-submit-btn`);
    const input = elem.querySelector(`.js-input`);
    const form = elem.querySelector(`.js-form`);

    input.addEventListener(`input`, (e) => {
      submitBtn.disabled = e.target.value.length === 0;
    });

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();
      this.onStart(input.value);
    });
  }

  onStart() {}

  restart() {}
}

export default RulesView;
