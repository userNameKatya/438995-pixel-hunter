import changeView from '../utils/change_view';
import RulesView from '../views/rules_view';

const rules = new RulesView();
rules.onStart = () => {
  changeView();
};

export default () => rules;
