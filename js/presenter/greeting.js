import Application from '../presenter/application';
import changeView from '../utils/change_view';
import GreetingView from '../views/greeting';

export default class Greeting {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    Application.showGreeting();

    this.view.next = () => {
      Application.showRules();
    };

    changeView(this.view.element);
  }
}
