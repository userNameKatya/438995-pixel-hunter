import Application from '../presenter/application';
import AbstractView from './abstract_view';
import footer from '../templates/footer';

class IntroView extends AbstractView {
  get template() {
    return `<div id="main" class="central__content">
      <div class="intro">
        <h1 class="intro__asterisk js-next-screen">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer}`;
  }

  next() {
    Application.showGreeting();
  }
}

export default new IntroView();
