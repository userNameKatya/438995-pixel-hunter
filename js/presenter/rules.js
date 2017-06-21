import initialState from '../data/initial_state';
import changeView from '../utils/change_view';
import RulesView from '../views/rules';
import intro from '../presenter/intro';
import Game from '../presenter/game';

RulesView.onStart = () => {
  return new Game(initialState);
};

RulesView.restart = () => {
  changeView(intro());
};

export default () => RulesView.element;
