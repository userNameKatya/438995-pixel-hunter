import {setCurrentState} from '../utils/set_current_state';
import getCorrectAnswer from '../utils/get_correct_answer';
import FindByTypeView from '../views/find_by_type';
import GuessTypeView from '../views/guess_type';
import changeView from '../utils/change_view';
import {RoundType} from '../data/constants';
import dataGame from '../data/data_game';
import intro from '../presenter/intro';
import EndGame from '../views/stats';

class Game {
  constructor(state) {
    this.setDataNewRound(state);
    this.setNewRound();
  }

  get view() {
    let view;
    if (this.state.lives === 0 || this.state.currentRound === this.state.totalRounds) {
      view = new EndGame(this.state);
    } else {
      switch (this.roundDate.type) {
        case RoundType.FIND:
          view = new GuessTypeView(this.roundDate, this.state);
          break;
        case RoundType.GUESS:
          view = new FindByTypeView(this.roundDate, this.state);
          break;
      }
    }
    return view;
  }

  setDataNewRound(state) {
    this.state = state;
    this.roundDate = dataGame[this.state.currentRound];
  }

  setNewRound() {
    let view = this.view;

    view.onAnswer = (answers, time) => {
      let correctAnswer = answers !== null ? getCorrectAnswer(this.roundDate, answers) : false;
      this.setDataNewRound(setCurrentState(this.state, correctAnswer, time));
      this.setNewRound();
    };

    view.restart = () => {
      changeView(intro());
    };

    changeView(view.element);
  }
}

export default Game;
