const textInput = document.querySelector('#validation-input');
const dataLength = parseInt(textInput.dataset.length);

const validationInput = () => {
  textInput.classList.add('invalid');

  if (textInput.value.length === dataLength) {
    textInput.classList.add('valid');
    textInput.classList.replace('invalid', 'valid');
  }
};

textInput.addEventListener('blur', validationInput);
