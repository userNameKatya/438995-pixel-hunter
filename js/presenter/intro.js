import IntroView from '../views/intro_view';
import changeView from '../utils/change_view';
import greeting from '../presenter/greeting';

const intro = new IntroView();
intro.next = () => {
  changeView(greeting());
};

export default () => intro;
