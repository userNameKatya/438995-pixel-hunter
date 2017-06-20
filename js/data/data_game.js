import {AnswerValues, RoundType} from './constants';

const descriptionGame = [
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    type: RoundType.FIND,
    option: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        answers: [
          {
            name: `option1`,
            value: AnswerValues.PHOTO.value,
            description: AnswerValues.PHOTO.description,
            trueAnswer: false
          },
          {
            name: `option1`,
            value: AnswerValues.PAINT.value,
            description: AnswerValues.PAINT.description,
            trueAnswer: true
          }
        ]
      },
      {
        img: `http://i.imgur.com/1KegWPz.jpg`,
        answers: [
          {
            name: `option2`,
            value: AnswerValues.PHOTO.value,
            description: AnswerValues.PHOTO.description,
            trueAnswer: true
          },
          {
            name: `option2`,
            value: AnswerValues.PAINT.value,
            description: AnswerValues.PAINT.description,
            trueAnswer: false
          }
        ]
      }
    ]
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: RoundType.FIND,
    option: [
      {
        img: `https://k42.kn3.net/D2F0370D6.jpg`,
        answers: [
          {
            name: `option1`,
            value: AnswerValues.PHOTO.value,
            description: AnswerValues.PHOTO.description,
            trueAnswer: false
          },
          {
            name: `option1`,
            value: AnswerValues.PAINT.value,
            description: AnswerValues.PAINT.description,
            trueAnswer: true
          }
        ]
      }
    ]
  },
  {
    task: `Найдите рисунок среди изображений?`,
    type: RoundType.GUESS,
    option: [
      {
        img: `https://k32.kn3.net/5C7060EC5.jpg`,
        answers: [
          {
            name: `option1`,
            value: AnswerValues.PAINT.value,
            description: AnswerValues.PAINT.description,
            trueAnswer: true
          }
        ]
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        answers: [
          {
            name: `option1`,
            value: AnswerValues.PHOTO.value,
            description: AnswerValues.PHOTO.description,
            trueAnswer: false
          }
        ]
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        answers: [
          {
            name: `option1`,
            value: AnswerValues.PHOTO.value,
            description: AnswerValues.PHOTO.description,
            trueAnswer: false
          }
        ]
      }
    ]
  }
];

export default descriptionGame;
