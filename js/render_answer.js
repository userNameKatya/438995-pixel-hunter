const renderAnswer = (option) => {
  return `${
    option.map((opt) => {
      return `<div class="game__option">
        <img src="${opt.img}" alt="Option 1" class="js-image">
        ${
          opt.answers.map((answer) => {
            return `<label class="game__answer game__answer--${answer.value} js-answer">
              <input name="${answer.name}" type="radio" value="${answer.value}">
              <span>${answer.description}</span>
            </label>`;
          }).join(``)
        }
      </div>`;
    }).join(``)
  }`;
};

export default renderAnswer;
