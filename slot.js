const randomIndex = () => Math.floor(Math.random() * themes.length)

const reel = document.getElementById('reel');
const symbols = document.getElementsByClassName('symbol');
const spinButton = document.getElementById('spin-button');
let isSpinning = false;

const start = () => {
  isSpinning = true;
  spinButton.textContent = 'STOP';
  spinReel();
}

const spinReel = () => {
  let interval = setInterval(() => {
    for (let i = 0; i < symbols.length; i++) symbols[i].classList.remove('displayed')
    symbols[randomIndex()].classList.add('displayed');
    if (!isSpinning) clearInterval(interval);
  }, 50)
}

const stop = () => {
  isSpinning = false;
  spinButton.textContent = 'CLICK!';
  const displayedSymbol = document.querySelector('.displayed');
  displayedSymbol.classList.remove('displayed');
  const randomIndex = Math.floor(Math.random() * symbols.length);
  symbols[randomIndex].classList.add('displayed');
}

spinButton.addEventListener('click', () => {
  if (isSpinning) stop();
  else start();
});

const rnd = randomIndex();
for (let i = 0; i < themes.length; i++) {
  const symbol = document.createElement('div');
  symbol.classList.add('symbol');
  if (i === rnd) symbol.classList.add('displayed')
  symbol.innerText = themes[i];
  reel.appendChild(symbol);
}
