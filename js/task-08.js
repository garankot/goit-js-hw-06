const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return alert('All form fields must be filled out!');
  }
  const formUserData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  console.log(formUserData);
  event.currentTarget.reset();
}
