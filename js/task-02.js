// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const products = document.querySelector(`#ingredients`);

const elements = [];

const createNewElement = ingredients.map((ingredient) => {
  const newEl = document.createElement(`li`);
  newEl.textContent = ingredient;
  newEl.classList.add(`item`);
  elements.push(newEl);
});
products.append(...elements);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = document.createElement(`li`);
//   ingredient.innerHTML = ingredients[i];
//   ingredient.classList.add(`item`);
//   products.append(ingredient);
// }
