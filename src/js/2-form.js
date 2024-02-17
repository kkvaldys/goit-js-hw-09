const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const mail = form.email.value;
  const message = form.message.value;

  return {
    mail,
    message,
  };
}

form.addEventListener('input', event => {
  event.preventDefault();
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem('message', jsonData);
});
