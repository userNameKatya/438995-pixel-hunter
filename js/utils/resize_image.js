import {QuestionType} from '../data/constants';

const sizeByType = {
  [QuestionType.TWO_OF_TWO]: {width: 468, height: 458},
  [QuestionType.TINDER_LIKE]: {width: 705, height: 455},
  [QuestionType.ONE_OF_THREE]: {width: 304, height: 455}
};

const resize = function (frame, image) {
  const size = {
    width: image.width,
    height: image.height
  };

  let ratioWidth = 1;
  let ratioHeight = 1;

  if (image.height > frame.height) {
    ratioHeight = frame.height / image.height;
  }

  if (image.width > frame.width) {
    ratioWidth = frame.width / image.width;
  }

  const min = Math.min(ratioHeight, ratioWidth);

  size.height = Math.floor(image.height * min);
  size.width = Math.floor(image.width * min);

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
