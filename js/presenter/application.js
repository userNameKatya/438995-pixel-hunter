import initialState from '../data/initial_state';
import changeView from '../utils/change_view';
import Greeting from '../views/greeting';
import Game from '../presenter/game';
import Stats from '../views/stats';
import Intro from '../views/intro';
import Rules from '../views/rules';

export default class Application {
  static showIntro() {
    changeView(Intro.element);
  }

  static showGreeting() {
    changeView(Greeting.element);
  }

  static showRules() {
    changeView(Rules.element);
  }

  static showGame() {
    return new Game(initialState);
  }

  static showState(data) {
    const GameStats = new Stats(data);
    changeView(GameStats.element);
  }
}
