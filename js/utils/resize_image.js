import {QuestionType} from '../data/constants';

const sizeByType = {
  [QuestionType.TWO_OF_TWO]: {width: 468, height: 458},
  [QuestionType.TINDER_LIKE]: {width: 705, height: 455},
  [QuestionType.ONE_OF_THREE]: {width: 304, height: 455}
};

const calcResult = function (max, min, standart) {
  let ratio = Math.ceil(max / standart);
  let maxParam = max / ratio;
  let minParam = min / ratio;

  while (maxParam > standart) {
    minParam = minParam / ratio;
    maxParam = maxParam / ratio;
  }

  return {
    max: maxParam,
    min: minParam
  };
};

const resize = function (frame, image) {
  const size = {
    width: image.width,
    height: image.height
  };

  if (image.width > image.height) {
    if (image.width > frame.width) {
      const result = calcResult(image.width, image.height, frame.width);

      size.height = result.min;
      size.width = result.max;
    }
  } else if (image.width < image.height) {
    if (image.height > frame.height) {
      const result = calcResult(image.height, image.width, frame.height);

      size.height = result.max;
      size.width = result.min;
    }
  } else {
    if (image.height > frame.height) {
      const result = calcResult(image.height, image.width, frame.height);

      size.height = result.max;
      size.width = result.min;
    }
  }

  return size;
};

const resizeImage = function (element, type) {
  const images = [...element.querySelectorAll(`.js-image`)];

  for (const image of images) {
    image.addEventListener(`load`, function (e) {
      const img = e.currentTarget;
      const size = {width: img.naturalWidth, height: img.naturalHeight};
      const resultSize = resize(sizeByType[type], size);

      img.width = resultSize.width;
      img.height = resultSize.height;
    });
  }
};

export {resize, resizeImage};
