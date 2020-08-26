const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const dish = ingredients.forEach((itemName) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.classList.add("ingredients__vegetables");
  ingredientsList.textContent = itemName;
  ingredientsRef.appendChild(ingredientsList);
});
