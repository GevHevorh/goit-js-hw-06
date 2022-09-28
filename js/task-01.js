// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории(всех вложенных в него < li >).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll("li.item");

const sumCategories = () =>
  console.log(`Number of categories: ${categories.length}`);

const showAllCategories = (categories) =>
  categories.forEach((category) => {
    const titleText = category.firstElementChild.textContent;
    const categoryElements = category.querySelectorAll(`li`);
    const showTitleText = console.log(`Category: ${titleText}`);
    const showNumberOfEl = console.log(`Elements ${categoryElements.length}`);

    return showTitleText, showNumberOfEl;
  });
sumCategories();
showAllCategories(categories);
