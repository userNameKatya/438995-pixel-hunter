import initialState from '../data/initial_state';
import changeView from '../utils/change_view';
import RulesView from '../views/rules_view';
import intro from '../presenter/intro';
import game from '../presenter/game';

const rules = new RulesView();
rules.onStart = () => {
  game(initialState);
};

rules.restart = () => {
  changeView(intro());
};

export default () => rules.element;
