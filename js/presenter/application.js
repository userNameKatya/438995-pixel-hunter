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
    return new Game(initialState);
  }

  showState(params) {
    location.hash = `${ControllerId.STATS}=${params}`;
  }

  getControllerId(hash) {
    const params = hash.indexOf(`=`);
    return [hash.substring(1, params > -1 ? params : hash.length), params > -1 ? hash.substring(params + 1) : ``];
  }

  changeController(array) {
    const [id = ``, params = ``] = array;
    const Controller = this.routes[id];
    new Controller(params).init();
  }

  init() {
    this.changeController(this.getControllerId(location.hash));
  }
}

export default new Application();
