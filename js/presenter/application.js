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
      this._changeController();
    };
  }

  showIntro() {
    location.hash = ControllerId.INTRO;
  }

  showGreeting(crossfade) {
    location.hash = `${ControllerId.GREETING}=${crossfade}`;
  }

  showRules() {
    location.hash = ControllerId.GAME;
  }

  showGame(state) {
    return new Game(state);
  }

  showStats(userName) {
    location.hash = `${ControllerId.STATS}=${userName}`;
  }

  _changeController() {
    const [id = ``, params = ``] = location.hash.replace(`#`, ``).split(`=`);
    const Controller = this.routes[id];
    new Controller(params).init();
  }

  init() {
    this._changeController();
  }
}

export default new Application();
