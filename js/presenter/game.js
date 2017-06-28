import {setCurrentState} from '../utils/set_current_state';
import getCorrectAnswer from '../utils/get_correct_answer';
import FindByTypeView from '../views/find_by_type';
import {AnswersDescribe} from '../data/constants';
import GuessTypeView from '../views/guess_type';
import changeView from '../utils/change_view';
import {RoundType} from '../data/constants';
import StatsGame from '../model/stats_game';
import DataGame from '../model/data_game';
import Application from './application';

class GamePresenter {
  constructor(state) {
    this.model = new DataGame();

    this.model.ready = (data) => {
      this.dataGame = data;
      this.setDataNewRound(Object.assign({}, state, {totalRounds: this.dataGame.length}));
      this.setNewRound();
    };
  }

  get view() {
    let view;
    if (this.state.lives === 0 || this.state.currentRound === this.state.totalRounds) {
      const resultArray = this.state.gameStats.concat(new Array(this.state.totalRounds - this.state.gameStats.length).fill(AnswersDescribe.UNKNOWN));
      StatsGame.sendStats(Object.assign({}, this.state, {gameStats: resultArray}));
      StatsGame.success = () => {
        Application.showStats(this.state.userName);
      };
      return null;
    }
    switch (this.roundData.type) {
      case RoundType.FIND:
        view = new GuessTypeView(this.roundData, this.state);
        break;
      case RoundType.GUESS:
        view = new FindByTypeView(this.roundData, this.state);
        break;
    }
    return view;
  }

  setDataNewRound(state) {
    this.state = state;
    this.roundData = this.dataGame[this.state.currentRound];
    this.time = this.state.time;
    this.timerId = null;
  }

  setNewRound() {
    const view = this.view;

    if (view) {
      view.onAnswer = (answers) => {
        clearInterval(this.timerId);
        const correctAnswer = answers !== null ? getCorrectAnswer(this.roundData, answers) : false;
        this.setDataNewRound(setCurrentState(this.state, correctAnswer, this.time));
        this.setNewRound();
      };

      view.restart = () => {
        clearInterval(this.timerId);
        Application.showIntro();
      };

      changeView(view.element);

      this.setTimer();
    }
  }

  setTimer() {
    const timerContainer = document.querySelector(`.js-timer`);

    this.timerId = setInterval(() => {
      --this.time;
      if (this.time === 0) {
        clearInterval(this.timerId);
        this.setDataNewRound(setCurrentState(this.state, false, this.time));
        this.setNewRound();
      }
      if (this.time === 5) {
        timerContainer.classList.add(`warning`);
      }
      timerContainer.innerHTML = this.time;
    }, 1000);
  }
}

export default GamePresenter;
