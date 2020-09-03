const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
const contentOfSpanFromMarkup = spanRef.textContent;

const handleInputChangeName = (event) => {
  spanRef.textContent = event.target.value;
};

const handleInputEmptyField = (event) => {
  if (event.target.value === "") {
    spanRef.textContent = contentOfSpanFromMarkup;
  }
};

inputRef.addEventListener("input", handleInputChangeName);
inputRef.addEventListener("input", handleInputEmptyField);
