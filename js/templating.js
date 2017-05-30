const getElementFromTemplate = function (string) {
  let fragment = document.createRange().createContextualFragment(string);

  return fragment;
};

export default getElementFromTemplate;
