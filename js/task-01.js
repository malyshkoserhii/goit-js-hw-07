const mainCategoriesRef = document.querySelector("#categories");
const amountOfchildren = mainCategoriesRef.children.length;
console.log(`В списку ${amountOfchildren} категорії`);

const firstTitleRef = document.querySelector(".item");
const firstCategoryTitle = firstTitleRef.firstElementChild;
const firstCategoryElements = firstCategoryTitle.nextElementSibling;

const secondCategoryRef = firstTitleRef.nextElementSibling;
const secondCategoryTitle = secondCategoryRef.firstElementChild;
const secondCategoryElements = secondCategoryTitle.nextElementSibling;

const thirdCategoryRef = secondCategoryRef.nextElementSibling;
const thirdCategoryTitle = thirdCategoryRef.firstElementChild;
const thirdCategoryElements = thirdCategoryTitle.nextElementSibling;

const categoriesInfotmation = (categoryTitle, amountofElements) =>
  `Категорія: ${categoryTitle.textContent};
Кількість елементів: ${amountofElements.children.length}`;

console.log(categoriesInfotmation(firstCategoryTitle, firstCategoryElements));
console.log(categoriesInfotmation(secondCategoryTitle, secondCategoryElements));
console.log(categoriesInfotmation(thirdCategoryTitle, thirdCategoryElements));
