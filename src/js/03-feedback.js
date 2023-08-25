import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_FORM_INPUT = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData,500));

function onInputData(evt) {
    let data = localStorage.getItem(KEY_FORM_INPUT);
    data = data ? JSON.parse(data) : {};
    let { email, message } = form.elements;
    data = {
        email: email.value.trim(),
        message: message.value.trim(),
    }
    data[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(KEY_FORM_INPUT, JSON.stringify(data));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  
}

