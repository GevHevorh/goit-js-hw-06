// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const buttonEl = document.querySelectorAll(`button`);
const valueEl = document.querySelector(`#value`);

buttonEl[0].addEventListener(`click`, () => {
  valueEl.textContent = counterValue -= 1;
});

buttonEl[1].addEventListener(`click`, () => {
  valueEl.textContent = counterValue += 1;
});

// const counter = {
//   value: 0,
//   increment() {
//     console.log(`increment -> this`, this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log(`decrement -> this`, this);
//     this.value += 1;
//   },
// };

// const decrementBtn = document.querySelector(`.decrement`);
// const incrementBtn = document.querySelector(`.increment`);
// const counterValue = document.querySelector(`.value`);

// decrementBtn.addEventListener(`click`, () => {
//   counter.decrement();
//   counterValue.textContent = counter.value;
// });

// incrementBtn.addEventListener(`click`, () => {
//   counter.increment();
//   counterValue.textContent = counter.value;
// });
