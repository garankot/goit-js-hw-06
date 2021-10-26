const rangeInput = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

const rangeChange = () => {
  textSize.style.fontSize = rangeInput.value + 'px';
};
rangeInput.addEventListener('input', rangeChange);
