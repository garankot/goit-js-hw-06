const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', textOutput);

function textOutput() {
  if (textInput.value === '') {
    output.textContent = 'Anonymous';
  }
  output.textContent = textInput.value;
}
