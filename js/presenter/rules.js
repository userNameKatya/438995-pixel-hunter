import initialState from '../data/initial_state';
import changeView from '../utils/change_view';
import RulesView from '../views/rules';
import intro from '../presenter/intro';
import Game from '../presenter/game';

const rules = new RulesView();
rules.onStart = () => {
  return new Game(initialState);
};

rules.restart = () => {
  changeView(intro());
};

export default () => rules.element;
