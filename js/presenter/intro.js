import changeView from '../utils/change_view';
import greeting from '../presenter/greeting';
import IntroView from '../views/intro';

const intro = new IntroView();
intro.next = () => {
  changeView(greeting());
};

export default () => intro.element;
