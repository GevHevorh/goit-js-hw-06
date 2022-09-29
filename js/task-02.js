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

// const products = document.querySelector(`#ingredients`);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = document.createElement(`li`);
//   ingredient.textContent = ingredients[i];
//   ingredient.classList.add(`item`);
//   products.append(ingredient);
//   console.log(products);
// }

const products = document.querySelector(`#ingredients`);

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = document.createElement(`li`);
  ingredient.innerHTML = ingredients[i];
  ingredient.classList.add(`item`);
  products.append(ingredient);
}
