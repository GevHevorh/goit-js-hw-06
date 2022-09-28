// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

const input = document.querySelector(`#validation-input`);
const lengthEl = Number(input.dataset.length);

input.addEventListener(`blur`, onFalseBlur);

function onFalseBlur() {
  if (input.value.length === lengthEl) {
    input.classList.remove(`invalid`);
    return input.classList.add(`valid`);
  } else {
    input.classList.remove(`valid`);
    return input.classList.add(`invalid`);
  }
}
