const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Заповнення форми даними зі сховища
function populateForm() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    form.email.value = data.email;
    form.message.value = data.message;
  }
}

populateForm();

// Обробка події input
form.addEventListener('input', e => {
  // Оновлення локального сховища
  const data = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

// Обробка події submit
form.addEventListener('submit', e => {
  e.preventDefault();

  // Логування даних при заповнених полях
  if (form.email.value && form.message.value) {
    console.log({
      email: form.email.value,
      message: form.message.value,
    });
  }

  // Очищення форми та сховища
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
