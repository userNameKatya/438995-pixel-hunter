import rules from '../presenter/rules';
import GreetingView from '../views/greeting';
import changeView from '../utils/change_view';

const greeting = new GreetingView();
greeting.next = () => {
  changeView(rules());
};

export default () => greeting.element;
