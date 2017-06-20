import dataGame from '../data/data_game';
import EndGame from '../views/stats_view';
import {RoundType} from '../data/constants';
import changeView from '../utils/change_view';
import GuessTypeView from '../views/guess_type_view';
import FindByTypeView from '../views/find_by_type_view';
// import getCorrectAnswer from '../utils/get_correct_answer';
// import {setCurrentState} from '../utils/set_current_state';

class Game {
  constructor(state) {
    this.state = state;
    this.roundDate = dataGame[state.currentRound];
    this.roundType = this.roundDate.type;

    changeView(this.view);
  }

  get view() {
    let view;
    if (this.state.lives === 0 || this.state.currentRound === this.state.totalRounds) {
      view = new EndGame(this.state);
    } else {
      switch (this.roundType) {
        case RoundType.FIND:
          view = new GuessTypeView(this.dataRound, this.state);
          break;
        case RoundType.GUESS:
          view = new FindByTypeView(this.dataRound, this.state);
          break;
      }
    }
    return view;
  }
}

/* let view;
let dataRound;
let roundType;

const game = (state) => {
  switchRound(state);

  view.onAnswer = () => {
    if (roundType === RoundType.FIND) {
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
      case RoundType.FIND:
        view = new GuessTypeView(dataRound, state);
        break;
      case RoundType.GUESS:
        view = new FindByTypeView(dataRound, state);
        break;
    }
  }

  changeView(view.element);
};*/

export default Game;
