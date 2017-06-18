import rules from '../presenter/rules';
import changeView from '../utils/change_view';
import GreetingView from '../views/greeting_view';

const greeting = new GreetingView();
greeting.next = () => {
  changeView(rules());
};

export default () => greeting;
