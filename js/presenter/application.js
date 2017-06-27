import {ControllerId} from '../data/constants';
import Greeting from '../presenter/greeting';
import Adapter from '../utils/adapter';
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
      this.changeController();
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

  showGame(state) {
    return new Game(state);
  }

  showStats(data) {
    location.hash = `${ControllerId.STATS}=${Adapter.encode(data)}`;
  }

  changeController() {
    let [id = ``, params = ``] = location.hash.replace(`#`, ``).split(`=`);
    params = params === `` ? params : Adapter.decode(params);
    const Controller = this.routes[id];
    new Controller(params).init();
  }

  init() {
    this.changeController();
  }
}

export default new Application();
