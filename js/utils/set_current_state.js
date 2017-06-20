import {AnswersDescribe} from '../data/constants';

const setLivesCount = (state, answer) => {
  if (answer) {
    return {lives: state.lives};
  } else {
    const newLivesCount = state.lives - 1;
    return {lives: Math.max(newLivesCount, 0)};
  }
};

const setRound = (state) => {
  const round = state.currentRound + 1 < state.totalRounds ? state.currentRound + 1 : state.totalRounds;

  return {currentRound: round};
};

const setGameStats = (state, answer, time) => {
  const newGameStats = state.gameStats.slice();
  let answerDescribe;

  if (answer) {
    const timePassed = state.time - time;

    if (timePassed < 10) {
      answerDescribe = AnswersDescribe.FAST;
    } else if (timePassed > 20) {
      answerDescribe = AnswersDescribe.SLOW;
    } else {
      answerDescribe = AnswersDescribe.CORRECT;
    }
  } else {
    answerDescribe = AnswersDescribe.WRONG;
  }

  newGameStats.push(answerDescribe);

  return {gameStats: newGameStats};
};

const setCurrentState = (state, answer, time) => {
  const currentState = Object.assign({}, state, setLivesCount(state, answer), setRound(state), setGameStats(state, answer, time));

  return currentState;
};

export {setCurrentState, setLivesCount, setRound, setGameStats};
