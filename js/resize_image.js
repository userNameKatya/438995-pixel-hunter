const resizeImage = function (element) {
  const images = [...element.querySelectorAll(`.js-image`)];

  for (const image of images) {
    image.addEventListener(`load`, function (e) {
      const img = e.currentTarget;
      if (img.parentNode.offsetHeight < img.naturalHeight || img.parentNode.offsetWidth < img.naturalWidth) {
        if (img.naturalWidth > img.naturalHeight) {
          img.style.width = `100%`;
        } else {
          img.style.height = `100%`;
        }
      }
    });
  }
};

export default resizeImage;
