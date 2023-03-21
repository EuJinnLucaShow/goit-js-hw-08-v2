// Отримати елементи форми
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

// Приєднатися до події введення на поля форми
form.addEventListener('input', () => {
  // Створити об'єкт стану форми
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Зберігати стан форми в локальному сховищі
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
});

// Перевірити, чи є збережений стан форми в локальному сховищі
const savedState = localStorage.getItem('feedback-form-state');

if (savedState) {
  // Заповнити поля форми збереженим станом
  const parsedState = JSON.parse(savedState);
  emailInput.value = parsedState.email;
  messageInput.value = parsedState.message;
}

// Приєднатися до події надсилання форми
form.addEventListener('submit', event => {
  // Заборонити стандартну дію відправки форми
  event.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill in all the fields!');
  }
  // Очистити локальне сховище
  localStorage.removeItem('feedback-form-state');

  // Вивести об'єкт з полями email та message та їхніми значеннями у консоль
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedbackData);

  // Очистити поля форми
  emailInput.value = '';
  messageInput.value = '';
});
