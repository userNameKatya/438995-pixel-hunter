const setLivesCount = (state, answer) => {
  if (answer) {
    return {lives: state.lives};
  } else {
    return {lives: state.lives - 1 >= 0 ? state.lives - 1 : 0};
  }
};

const setRound = (state) => {
  const round = state.currentRound + 1 < state.totalRounds ? state.currentRound + 1 : state.totalRounds - 1;

  return {currentRound: round};
};

const setGameStats = (state, answer, time) => {
  const newGameStats = state.gameStats.slice();
  let answerDescribe;

  if (answer) {
    const timePassed = state.time - time;

    if (timePassed < 10) {
      answerDescribe = `fast`;
    } else if (timePassed > 20) {
      answerDescribe = `slow`;
    } else {
      answerDescribe = `correct`;
    }
  } else {
    answerDescribe = `wrong`;
  }

  newGameStats.push(answerDescribe);

  return {gameStats: newGameStats};
};

const setCurrentState = (state, answer, time) => {
  const currentState = Object.assign({}, state, setLivesCount(state, answer), setRound(state), setGameStats(state, answer, time));

  return currentState;
};

export default setCurrentState;
