import changeView from '../utils/change_view';
import greeting from '../presenter/greeting';
import IntroView from '../views/intro';

IntroView.next = () => {
  changeView(greeting());
};

export default () => IntroView.element;
