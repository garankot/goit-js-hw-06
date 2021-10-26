const textInput = document.querySelector('#validation-input');
const dataLength = parseInt(textInput.dataset.length);

const validationInput = () => {
  textInput.classList.add('invalid');

  if (textInput.value.length === dataLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  }
};

textInput.addEventListener('blur', validationInput);
