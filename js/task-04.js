const spanValueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);

const increment = () => {
  spanValueRef.textContent = Number(spanValueRef.textContent) + 1;
};

const decrement = () => {
  spanValueRef.textContent = Number(spanValueRef.textContent) - 1;
};

btnIncrementRef.addEventListener("click", increment);
btnDecrementRef.addEventListener("click", decrement);
