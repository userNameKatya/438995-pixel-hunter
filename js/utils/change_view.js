const screen = document.querySelector(`.js-main-screen`);

const changeView = function (view, crossfade = false) {
  if (!crossfade) {
    screen.innerHTML = ``;
    screen.appendChild(view);
  } else {
    if ([...screen.childNodes].length) {
      for (const it of view.children) {
        it.classList.add(`js-back`);
      }

      for (const it of [...screen.childNodes]) {
        if (it.nodeName !== `#text`) {
          it.classList.add(`js-front`);
        }
      }

      view.children[0].classList.add(`absolute-top`);
      view.children[view.children.length - 1].classList.add(`absolute-bottom`);

      screen.appendChild(view);

      for (const it of screen.querySelectorAll(`.js-front`)) {
        it.classList.add(`transparent`);
      }

      for (const it of screen.querySelectorAll(`.js-back`)) {
        it.classList.add(`opaque`);
      }
      setTimeout(() => {
        for (const it of screen.querySelectorAll(`.js-back`)) {
          it.classList.remove(`absolute-top`);
          it.classList.remove(`absolute-bottom`);
        }

        for (const it of screen.querySelectorAll(`.js-front`)) {
          screen.removeChild(it);
        }
      }, 3000);

    } else {
      screen.appendChild(view);
    }
  }
};

export default changeView;
