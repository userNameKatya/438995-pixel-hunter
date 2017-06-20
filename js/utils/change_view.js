const screen = document.querySelector(`.js-main-screen`);

const changeView = function (view) {
  screen.innerHTML = ``;
  screen.appendChild(view);
};

export default changeView;
