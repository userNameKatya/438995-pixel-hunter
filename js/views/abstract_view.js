class AbstractView {
  constructor(data, state) {
    this.view = null;

    if (data) {
      this.data = data;
    }
    if (state) {
      this.state = state;
    }
  }

  get template() {
    throw new Error(`Not Implemented`);
  }

  render() {
    const fragment = document.createElement(`template`);

    fragment.innerHTML = this.template;
    return fragment.content;
  }

  get element() {
    const elem = this.getMarkup();
    this.bind(elem);
    return elem;
  }

  bind(elem) {
    const buttonNext = elem.querySelector(`.js-next-screen`);
    buttonNext.addEventListener(`click`, () => {
      this.next();
    });
  }

  getMarkup() {
    if (this.view === null) {
      this.view = this.render();
    }
    return this.view.cloneNode(true);
  }

  next() {}
}

export default AbstractView;
