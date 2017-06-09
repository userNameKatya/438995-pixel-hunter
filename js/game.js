import findOne from './templates/find-one.js';
import guessForOne from './templates/guess-for-one.js';
import guessForEach from './templates/guess-for-each.js';

const descriptionGame = [
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    type: guessForEach,
    option: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        answers: [
          {
            name: `option1`,
            value: `photo`,
            description: `Фото`,
            trueAnswer: false
          },
          {
            name: `option1`,
            value: `paint`,
            description: `Рисунок`,
            trueAnswer: true
          }
        ]
      },
      {
        img: `http://i.imgur.com/1KegWPz.jpg`,
        answers: [
          {
            name: `option2`,
            value: `photo`,
            description: `Фото`,
            trueAnswer: true
          },
          {
            name: `option2`,
            value: `paint`,
            description: `Рисунок`,
            trueAnswer: false
          }
        ]
      }
    ]
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: guessForOne,
    option: [
      {
        img: `https://k42.kn3.net/D2F0370D6.jpg`,
        answers: [
          {
            name: `option1`,
            value: `photo`,
            description: `Фото`,
            trueAnswer: false
          },
          {
            name: `option1`,
            value: `paint`,
            description: `Рисунок`,
            trueAnswer: true
          }
        ]
      }
    ]
  },
  {
    task: `Найдите рисунок среди изображений?`,
    type: findOne,
    option: [
      {
        img: `https://k32.kn3.net/5C7060EC5.jpg`,
        answers: [
          {
            name: `option1`,
            value: `paint`,
            description: `Рисунок`,
            trueAnswer: true
          }
        ]
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        answers: [
          {
            name: `option1`,
            value: `photo`,
            description: `Фото`,
            trueAnswer: false
          }
        ]
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        answers: [
          {
            name: `option1`,
            value: `photo`,
            description: `Фото`,
            trueAnswer: false
          }
        ]
      }
    ]
  }
];

export default descriptionGame;
