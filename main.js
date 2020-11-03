const playButton = document.querySelector('.play__button');
const gameScreen = document.querySelector('.gameScreen');

playButton.addEventListener('click', () => {
  // bug, carrot 20개 랜덤한 위치에 생성
  createElements();
});

function createElements() {
  const width = gameScreen.offsetWidth;
  const height = gameScreen.offsetHeight;
  for (let index = 0; index < 20; index++) {
    const bug = document.createElement('img');
    const carrot = document.createElement('img');
    bug.setAttribute('data-id', index);
    bug.setAttribute('src', './img/bug.png');
    bug.setAttribute('class', 'items');
    bug.style.top = `${getRandomInt(0, height - 80)}px`;
    bug.style.left = `${getRandomInt(0, width - 80)}px`;
    carrot.setAttribute('data-id', index);
    carrot.setAttribute('src', './img/carrot.png');
    carrot.setAttribute('class', 'items');
    carrot.style.top = `${getRandomInt(0, height - 80)}px`;
    carrot.style.left = `${getRandomInt(0, width - 80)}px`;
    gameScreen.appendChild(bug);
    gameScreen.appendChild(carrot);
  }
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};