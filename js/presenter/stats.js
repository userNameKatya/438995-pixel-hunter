import Application from '../presenter/application';
import StatsView from '../views/stats';

class StatsPresenter {
  constructor(state) {
    this.state = state;
  }

  get view() {
    const stats = new StatsView(this.state);
    stats.restart = () => {
      Application.showIntro();
    };

    return stats.element;
  }
}


export default StatsPresenter;
