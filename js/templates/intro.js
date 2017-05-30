import getElementFromTemplate from '../templating';
import changeScreen from '../change_screen.js';
import greeting from './greeting.js';

const element = getElementFromTemplate(`
  <div class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
`);

const nextScreen = element.querySelector(`.intro__asterisk`);

nextScreen.addEventListener(`click`, function (e) {
  changeScreen(greeting);
});

export default element;
