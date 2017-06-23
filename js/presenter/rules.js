import Application from '../presenter/application';
import RulesView from '../views/rules';

const rules = new RulesView();
rules.onStart = () => {
  Application.showGame();
};

rules.restart = () => {
  Application.showIntro();
};

export default () => rules.element;
