import Application from '../presenter/application';
import changeView from '../utils/change_view';
import StatsView from '../views/stats';

export default class Stats {
  constructor(data) {
    this.stats = JSON.parse(window.atob(data));
  }

  init() {
    this.view = new StatsView(this.stats);

    this.view.restart = () => {
      Application.showIntro();
    };

    changeView(this.view.element);
  }
}
