import {AnswerValues, RoundType, DataUrl} from '../data/constants';

export default class DataGame {
  constructor() {
    fetch(DataUrl)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }

        response.json().then((data) => {
          this.responseData(data);
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  responseData(data) {
    const resultArray = [];

    data.map((it) => {
      const round = {
        type: it.type === QuestionType.ONE_OF_THREE ? RoundType.GUESS : RoundType.FIND,
        task: it.question,
        option: it.answers.map((answer, index, task) => {
          return {
            img: answer.image.url,
            answers: this.getAnswerList(answer, index)
          };
        }),
      };
      resultArray.push(round);
    });

    this.ready(resultArray);
  }

  getAnswerList(answer, index, task) {
    const array = new Array(1).fill({
      name: `option${index + 1}`,
      value: AnswerValues[`${answer.type.toUpperCase()}`].value,
      description: AnswerValues[`${answer.type.toUpperCase()}`].description,
      trueAnswer: answer.type !== QuestionType.ONE_OF_THREE ? true : this.determineCorrectAnswer(task, answer)
    });

    if (answer.type !== QuestionType.ONE_OF_THREE) {
      array.push({
        name: `option${index + 1}`,
        value: AnswerValues[`${answer.type.toUpperCase() === `PHOTO` ? `PAINTING` : `PHOTO`}`].value,
        description: AnswerValues[`${answer.type.toUpperCase() === `PHOTO` ? `PAINTING` : `PHOTO`}`].description,
        trueAnswer: false
      });
    }

    return array;
  }

  determineCorrectAnswer(task, answer) {
    let type;
    if (task.indexOf(AnswerValues.PAINTING.description.toLowerCase()) > -1) {
      type = AnswerValues.PAINTING.value;
    } else if (task.indexOf(AnswerValues.PHOTO.description.toLowerCase()) > -1) {
      type = AnswerValues.PHOTO.value;
    }

    return answer.type === type;
  }

  ready() {}
}
