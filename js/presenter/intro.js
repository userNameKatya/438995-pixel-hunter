import Application from '../presenter/application';
import changeView from '../utils/change_view';
import DataGame from '../model/data_game';
import IntroView from '../views/intro';

export default class Intro {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    changeView(this.view.element);
    this.model = new DataGame();
    this.resultArray = [];

    this.model.ready = (data) => {
      for (const it of data) {
        for (const answer of it.option) {
          this.resultArray.push(answer.img);
        }
      }

      this.notLoadedCount = this.resultArray.length - 1;
      this._addEvent();
    };
  }

  _addEvent() {
    for (const it of this.resultArray) {
      const image = document.createElement(`img`);
      image.src = it;

      image.addEventListener(`load`, (e) => {
        --this.notLoadedCount;
        if (this.notLoadedCount === 0) {
          Application.showGreeting(true);
        }
      });
    }
  }
}
