import initialState from '../data/initial_state';
import changeView from '../utils/change_view';
import greeting from '../presenter/greeting';
import intro from '../presenter/intro';
import rules from '../presenter/rules';
import Stats from '../presenter/stats';
import Game from '../presenter/game';

export default class Application {
  static showIntro() {
    changeView(intro());
  }

  static showGreeting() {
    changeView(greeting());
  }

  static showRules() {
    changeView(rules());
  }

  static showGame() {
    return new Game(initialState);
  }

  static showState(data) {
    const state = new Stats(data);
    changeView(state.view);
  }
}
