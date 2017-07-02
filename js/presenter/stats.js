import Application from '../presenter/application';
import changeView from '../utils/change_view';
import StatsGame from '../model/stats_game';
import StatsView from '../views/stats';

export default class Stats {
  constructor(userName) {
    this.userName = userName;
  }

  init() {
    StatsGame.getStats(this.userName);
    StatsGame.success = (data) => {
      this.stats = data;
      this._callView();
    };
  }

  _callView() {
    this.view = new StatsView(this.stats);

    this.view.restart = () => {
      Application.showGreeting();
    };

    changeView(this.view.element);
  }
}
