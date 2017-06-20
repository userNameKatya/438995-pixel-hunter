import descriptionGame from './data_game';

const initialState = {
  time: 30,
  lives: 3,
  totalRounds: descriptionGame.length,
  currentRound: 0,
  gameStats: []
};

export default initialState;
