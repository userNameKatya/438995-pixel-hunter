import Application from '../presenter/application';
import changeView from '../utils/change_view';
import GreetingView from '../views/greeting';

export default class Greeting {
  constructor(crossfade) {
    this.view = new GreetingView();
    this.crossfade = crossfade;
  }

  init() {
    this.view.next = () => {
      Application.showRules();
    };

    changeView(this.view.element, this.crossfade);
  }
}
