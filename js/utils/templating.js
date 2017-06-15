const getElementFromTemplate = function (string) {
  let fragment = document.createElement(`template`);

  fragment.innerHTML = string;
  return fragment.content;
};

export default getElementFromTemplate;