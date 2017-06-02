import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen';
import greeting from './greeting';

const intro = () => {
  const element = getElementFromTemplate(`
    <div id="main" class="central__content">
      <div class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
  `);

  const cloneElement = element.cloneNode(true);
  const nextScreenBtn = cloneElement.querySelector(`.intro__asterisk`);

  nextScreenBtn.addEventListener(`click`, function (e) {
    greeting();
  });

  changeScreen(cloneElement);
};

export default intro;
