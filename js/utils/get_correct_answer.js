const getCorrectAnswer = function (data) {
  const answersGiven = [...document.querySelectorAll(`input[type="radio"]:checked`)];

  let trueAnswersCount = 0;

  for (const it of answersGiven) {
    const index = Number(it.name.replace(/\D+/ig, ``)) - 1;
    const [firstOption, secondOption] = data.option[index].answers;
    const trueAnswer = firstOption.trueAnswer ? firstOption : secondOption;

    if (trueAnswer.name === it.name && trueAnswer.value === it.value) {
      ++trueAnswersCount;
    }
  }

  return answersGiven.length === trueAnswersCount;
};

export default getCorrectAnswer;
