const AnswersDescribe = {
  WRONG: `wrong`,
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`
};

const AnswerValues = {
  PHOTO: {
    value: `photo`,
    description: `Фото`
  },
  PAINTING: {
    value: `paint`,
    description: `Рисунок`
  }
};

const RoundType = {
  FIND: 1,
  GUESS: 2
};

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  GAME: `game`,
  STATS: `stats`
};

const DataUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;

export {AnswersDescribe, AnswerValues, RoundType, ControllerId, DataUrl};
