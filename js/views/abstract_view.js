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

  get element() {
    const elem = this._getMarkup();
    this.bind(elem);
    return elem;
  }

  _render() {
    const fragment = document.createElement(`template`);

    fragment.innerHTML = this.template;
    return fragment.content;
  }

  _getMarkup() {
    if (this.view === null) {
      this.view = this._render();
    }
    return this.view.cloneNode(true);
  }

  bind(elem) {}
}

export default AbstractView;
