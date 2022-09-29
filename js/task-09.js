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

// ========================================================= //

// function getRandomHexColor(bodyEl) {
//   document.querySelector(),
//     (spanEl = document.querySelector(".color")),
//     (r = Math.floor(Math.random() * 256)),
//     (g = Math.floor(Math.random() * 256)),
//     (b = Math.floor(Math.random() * 256)),
//     (bodyEl = "#" + r.toString(16) + g.toString(16) + b.toString(16));
// }

// const bodyEl = document.querySelector(`body`);
// const btnEl = document.querySelector(`.change-color`);
// const spanEl = document.querySelector(`.color`);
// btnEl.addEventListener(`click`, changeColor);
// function changeColor() {
//   bodyEl.style.backgroundColor = getRandomHexColor();
//   spanEl.textContent = getRandomHexColor();
// }

// =========================================================== //

// function getRandomRgbColor(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const bodyEl = document.querySelector(`body`);
// const btnEl = document.querySelector(`.change-color`);
// const spanEl = document.querySelector(`.color`);
// btnEl.addEventListener(`click`, changeColor);
// function changeColor() {
//   bodyEl.style.backgroundColor =
//     `rgb(` +
//     getRandomRgbColor(0, 255) +
//     `, ` +
//     getRandomRgbColor(0, 255) +
//     `, ` +
//     getRandomRgbColor(0, 255) +
//     `)`;
//   spanEl.textContent = getRandomRgbColor(0, 255);
// }
