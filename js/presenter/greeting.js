import Application from '../presenter/application';
import GreetingView from '../views/greeting';

const greeting = new GreetingView();
greeting.next = () => {
  Application.showRules();
};

export default () => greeting.element;
