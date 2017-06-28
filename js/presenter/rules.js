import Application from '../presenter/application';
import initialState from '../data/initial_state';
import changeView from '../utils/change_view';
import RulesView from '../views/rules';

export default class Rules {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    this.view.onStart = (userName) => {
      const state = Object.assign({}, initialState, {userName});
      Application.showGame(state);
    };

    this.view.restart = () => {
      Application.showIntro();
    };

    changeView(this.view.element);
  }
}
