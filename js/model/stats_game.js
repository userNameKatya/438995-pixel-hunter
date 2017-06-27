import {StatsUrl} from '../data/constants';

class StatsGame {
  getStats(userName) {
    fetch(`${StatsUrl}${userName}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }

        response.json().then((data) => {
          this.success(data);
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  sendStats(state) {
    fetch(`${StatsUrl}${state.userName}`, {
      method: `POST`,
      headers: {
        'Accept': `application/json`,
        'Content-Type': `application/json`
      },
      body: this.serialize(state)
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        this.success();
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  serialize(object) {
    return JSON.stringify({
      lives: object.lives,
      stats: object.gameStats
    });
  }

  success() {}
}

export default new StatsGame();
