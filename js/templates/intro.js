import getElementFromTemplate from `../templating`;

const element = getElementFromTemplate(`
  <div class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sub>* Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</sub></p>
  </div>
`);

export default element;
