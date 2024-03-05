const form = document.querySelector('.feedback-form');

// Ключ локального сховища відповідно до завдання
const STORAGE_KEY = 'feedback-form-state';

// Ініціалізація даних форми з локального сховища
function populateFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
  }
}

populateFormData();

// Зчитування даних форми
function getFormData() {
  return {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
}

// Обробка події submit
form.addEventListener('submit', evt => {
  evt.preventDefault();

  // Валідація та інша логіка
  const data = getFormData();

  // Виведення даних в консоль
  console.log(data);

  // Скидання форми
  form.reset();

  // Збереження даних в локальне сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});
