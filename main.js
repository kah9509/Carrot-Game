const playButton = document.querySelector('.play__button');
const gameScreen = document.querySelector('.gameScreen');
const timerInput = document.querySelector('input');
let timer = null;
let time = 0;
let remain = 15;

gameScreen.addEventListener('click', (event) => {
  console.log('event', event.target);
  if (event.target.className === 'bug') {
    // 게임 실패
  } else if (event.target.className === 'carrot') {
    const id = event.target.dataset.id;
    const toBeDeleted = document.querySelector(`.carrot[data-id="${id}"]`);
    toBeDeleted.remove();
    remain -= 1;
    console.log('remain', remain);
    if (remain === 0) {
      event.target.setAttribute('name', '시작');
      event.target.innerText = '시작';
      clearElements();
    }
    // 갯수 차감
  }
});

playButton.addEventListener('click', (event) => {
  // bug, carrot 20개 랜덤한 위치에 생성
  if (event.target.name === '시작') {
    event.target.setAttribute('name', '중지');
    event.target.innerText = '중지';
    createElements();
    timer = setInterval(() => {
      time += 1;
      timerInput.value = time;
      if (time === 20) {
        event.target.setAttribute('name', '시작');
        event.target.innerText = '시작';
        clearElements();
      }
    }, 1000);
  } else {
    event.target.setAttribute('name', '시작');
    event.target.innerText = '시작';
    time = 0;
    clearElements();
  }
});

function createElements() {
  const width = gameScreen.offsetWidth;
  const height = gameScreen.offsetHeight;
  for (let index = 0; index < 15; index++) {
    const bug = document.createElement('img');
    const carrot = document.createElement('img');
    bug.setAttribute('data-id', index);
    bug.setAttribute('src', './img/bug.png');
    bug.setAttribute('class', 'bug');
    bug.style.top = `${getRandomInt(0, height - 80)}px`;
    bug.style.left = `${getRandomInt(0, width - 80)}px`;
    carrot.setAttribute('data-id', index);
    carrot.setAttribute('src', './img/carrot.png');
    carrot.setAttribute('class', 'carrot');
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
function clearElements() {
  gameScreen.innerHTML = '';
  timerInput.value = 0;
  time = 0;
  clearInterval(timer);
}