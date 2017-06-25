import Application from '../presenter/application';
import changeView from '../utils/change_view';
import IntroView from '../views/intro';

export default class Intro {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.next = () => {
      Application.showGreeting();
    };

    changeView(this.view.element);
  }
}
