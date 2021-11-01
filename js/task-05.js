const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const textOutput = () => {
  if (textInput.value === '') {
    return (output.textContent = 'Anonymous');
  }
  output.textContent = textInput.value;
};
textInput.addEventListener('input', textOutput);
