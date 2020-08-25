const mainCategoriesRef = document.querySelectorAll(".item");
const amountOfchildren = mainCategoriesRef.length;
console.log(`В списку ${amountOfchildren} категорії`);

const categoriesInfo = mainCategoriesRef.forEach((category) =>
  console.log(`Категорія: ${category.querySelector("h2").textContent}
 Кількість елементів: ${category.querySelectorAll("li").length}`),
);