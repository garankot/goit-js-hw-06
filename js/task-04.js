const btnDecrement = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  return (spanValue.textContent = counterValue);
};

btnDecrement.addEventListener('click', decrementValue);

const incrementValue = () => {
  counterValue += 1;
  return (spanValue.textContent = counterValue);
};

btnIncrement.addEventListener('click', incrementValue);
