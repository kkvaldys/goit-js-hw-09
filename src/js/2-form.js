const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Заповнення форми зі сховища
function populateForm() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    form.email.value = data.email;
    form.message.value = data.message;
  }
}

populateForm();

form.addEventListener('input', e => {
  // Збереження даних у сховище
  const email = form.email.value;
  const message = form.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // Отримання даних з trim()
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Логування даних при заповнених полях
  if (email && message) {
    console.log({ email, message });
  }

  // Скидання форми та сховища
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
