// Напиши скрипт, который изменяет цвета
// фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector(`body`);
const btnEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);
btnEl.addEventListener(`click`, changeColor);
function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
