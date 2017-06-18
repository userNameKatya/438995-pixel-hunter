class AbstractView {
  constructor(data, state) {
    if (data) {
      this.data = data;
    }
    if (state) {
      this.state = state;
    }
    return this.element;
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
    if (this.view === `undefined`) {
      this.view = this.render();
    }
    return this.view.cloneNode(true);
  }

  next() {}
}

export default AbstractView;
