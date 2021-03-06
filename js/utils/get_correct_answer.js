import {QuestionType} from '../data/constants';

const getCorrectAnswer = function (data, userAnswers) {
  let trueAnswer = false;

  switch (data.type) {
    case QuestionType.ONE_OF_THREE:
      for (const it of data.option) {
        if (it.img === userAnswers && it.answers[0].trueAnswer) {
          trueAnswer = true;
        }
      }
      break;
    default:
      let trueAnswersCount = 0;

      for (const it of userAnswers) {
        const index = Number(it.name.replace(/\D+/ig, ``)) - 1;
        const [firstOption, secondOption] = data.option[index].answers;
        const currentTrueAnswer = firstOption.trueAnswer ? firstOption : secondOption;

        if (currentTrueAnswer.name === it.name && currentTrueAnswer.value === it.value) {
          ++trueAnswersCount;
        }
      }

      trueAnswer = userAnswers.length === trueAnswersCount;
      break;
  }

  return trueAnswer;
};

export default getCorrectAnswer;
