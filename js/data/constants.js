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

const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

const TotalRounds = 10;

const DataUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
const StatsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/`;

export {AnswersDescribe, AnswerValues, RoundType, ControllerId, QuestionType, TotalRounds, DataUrl, StatsUrl};
