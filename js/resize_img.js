const resizeImg = function (element) {
  const images = [...element.querySelectorAll(`.js-image`)];

  for (const image of images) {
    image.addEventListener(`load`, function (e) {
      const img = e.currentTarget;
      if (img.naturalWidth > img.naturalHeight) {
        img.style.width = `100%`;
      } else {
        img.style.height = `100%`;
      }
    });
  }
}

export default resizeImg;
