import Application from '../presenter/application';
import changeView from '../utils/change_view';
import RulesView from '../views/rules';

export default class Rules {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    this.view.onStart = () => {
      Application.showGame();
    };

    this.view.restart = () => {
      Application.showIntro();
    };

    changeView(this.view.element);
  }
}
