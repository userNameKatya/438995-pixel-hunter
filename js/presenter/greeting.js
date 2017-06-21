import rules from '../presenter/rules';
import GreetingView from '../views/greeting';
import changeView from '../utils/change_view';

GreetingView.next = () => {
  changeView(rules());
};

export default () => GreetingView.element;
