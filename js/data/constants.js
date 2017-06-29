const AnswersDescribe = {
  WRONG: `wrong`,
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  UNKNOWN: `unknown`
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

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  GAME: `game`,
  STATS: `stats`
};

const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

const DataUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
const StatsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/`;

export {AnswersDescribe, AnswerValues, ControllerId, QuestionType, DataUrl, StatsUrl};
