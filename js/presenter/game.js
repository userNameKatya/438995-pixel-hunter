import EndGame from '../views/stats_view';
import dataGame from '../data/data_game';
import changeView from '../utils/change_view';
import GuessTypeView from '../views/guess_type_view';
import FindByTypeView from '../views/find_by_type_view';
import getCorrectAnswer from '../utils/get_correct_answer';
import {setCurrentState} from '../utils/set_current_state';

let view;
let dataRound;
let roundType;

const game = (state) => {
  switchRound(state);

  view.onAnswer = () => {
    if (roundType === 1) {
      let newState = setCurrentState(state, getCorrectAnswer(dataRound));
      switchRound(newState);
    }
  };
};

const switchRound = (state) => {
  dataRound = dataGame[state.currentRound];
  roundType = dataRound.type;

  if (state.lives === 0 || state.currentRound === state.totalRounds) {
    view = new EndGame();
  } else {
    switch (roundType) {
      case 1:
        view = new GuessTypeView(dataRound, state);
        break;
      case 2:
        view = new FindByTypeView(dataRound, state);
        break;
    }
  }

  changeView(view.element);
};

export default game;
