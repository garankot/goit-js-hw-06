function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const hexColor = document.querySelector('.color');
const bgSwitcherBtn = document.querySelector('.change-color');

bgSwitcherBtn.addEventListener('click', onChangeColor);
function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  hexColor.textContent = getRandomHexColor();
}
