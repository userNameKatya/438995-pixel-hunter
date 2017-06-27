import {setCurrentState} from '../utils/set_current_state';
import getCorrectAnswer from '../utils/get_correct_answer';
import {StatsUrl} from '../data/constants';
import FindByTypeView from '../views/find_by_type';
import GuessTypeView from '../views/guess_type';
import changeView from '../utils/change_view';
import {RoundType} from '../data/constants';
import DataGame from '../model/data_game';
import Application from './application';

class GamePresenter {
  constructor(state) {
    this.model = new DataGame();

    this.model.ready = (data) => {
      this.dataGame = data;
      this.setDataNewRound(state);
      this.setNewRound();
    };
  }

  get view() {
    let view;
    if (this.state.lives === 0 || this.state.currentRound === this.state.totalRounds) {
      this.sendState();
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

  sendState() {
    fetch(`${StatsUrl}${this.state.userName}`, {method: `POST`})
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }

        Application.showStats(this.state);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export default GamePresenter;
