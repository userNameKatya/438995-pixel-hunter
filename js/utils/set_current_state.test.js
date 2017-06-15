import assert from 'assert';
import {setLivesCount, setRound, setGameStats} from './set_current_state';

describe(`setCurrentState`, () => {

  describe(`setLivesCount`, () => {
    const state = {
      time: 30,
      lives: 3,
      totalRounds: 10,
      currentRound: 0,
      gameStats: []
    };

    it(`the number of lives decreases by one if given the wrong answer`, function () {
      assert.equal(setLivesCount(state, false).lives, state.lives - 1);
    });

    it(`the number of lives does not decrease, if given the correct answer`, function () {
      assert.equal(setLivesCount(state, true).lives, state.lives);
    });

    it(`the number of lives becomes negative`, function () {
      const newState = Object.assign({}, state, {lives: 0});

      assert.equal(setLivesCount(newState, false).lives, 0);
    });
  });

  describe(`setRound`, () => {
    const state = {
      time: 30,
      lives: 3,
      totalRounds: 10,
      currentRound: 0,
      gameStats: []
    };

    it(`the level increases by 1`, function () {
      assert.equal(setRound(state).currentRound, state.currentRound + 1);
    });

    it(`not transferred to a higher level possible`, function () {
      const lastRoundState = Object.assign({}, state, {currentRound: 9});

      assert.equal(setRound(lastRoundState).currentRound, lastRoundState.currentRound);
    });
  });

  describe(`setGameStats`, () => {
    const state = {
      time: 30,
      lives: 3,
      totalRounds: 10,
      currentRound: 0,
      gameStats: []
    };

    it(`the wrong answer is marked`, function () {
      const newGameState = setGameStats(state, false, 25).gameStats;

      assert.equal(newGameState[newGameState.length - 1], `wrong`);
    });

    it(`quick the correct answer is marked`, function () {
      const newGameState = setGameStats(state, true, 25).gameStats;

      assert.equal(newGameState[newGameState.length - 1], `fast`);
    });

    it(`slow the correct answer is marked`, function () {
      const newGameState = setGameStats(state, true, 5).gameStats;

      assert.equal(newGameState[newGameState.length - 1], `slow`);
    });

    it(`the correct answer is marked`, function () {
      const newGameState = setGameStats(state, true, 10).gameStats;

      assert.equal(newGameState[newGameState.length - 1], `correct`);
    });
  });

});
