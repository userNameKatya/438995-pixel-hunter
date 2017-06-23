import Application from '../presenter/application';
import IntroView from '../views/intro';

const intro = new IntroView();
intro.next = () => {
  Application.showGreeting();
};

export default () => intro.element;
