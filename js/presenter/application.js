import initialState from '../data/initial_state';
import {ControllerId} from '../data/constants';
import Greeting from '../presenter/greeting';
import Intro from '../presenter/intro';
import Rules from '../presenter/rules';
import Stats from '../presenter/stats';
import Game from '../presenter/game';

class Application {
  constructor() {
    this.routes = {
      [ControllerId.INTRO]: Intro,
      [ControllerId.GREETING]: Greeting,
      [ControllerId.GAME]: Rules,
      [ControllerId.STATS]: Stats
    };

    this.state = initialState;

    window.onhashchange = () => {
      this.changeController(this.getControllerId(location.hash));
    };
  }

  showIntro() {
    location.hash = ControllerId.INTRO;
  }

  showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  showRules() {
    location.hash = ControllerId.GAME;
  }

  showGame() {
    return new Game(this.state);
  }

  showState(data) {
    this.state = data;
    location.hash = ControllerId.STATS;
  }

  getControllerId(hash) {
    return hash.replace(`#`, ``);
  }

  changeController(id = ``) {
    const Controller = this.routes[id];
    new Controller(this.state).init();
  }

  init() {
    this.changeController(this.getControllerId(location.hash));
  }
}

export default new Application();
