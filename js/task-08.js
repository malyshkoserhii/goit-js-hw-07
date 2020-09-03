const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#name-input");
const renderBtnRef = document.querySelector("button[data-action='render']");
const destroyBtnRef = document.querySelector("button[data-action='destroy']");

const createBox = (size) => {
  const newBox = document.createElement("div");
  newBox.setAttribute(
    "style",
    `width: ${size}px; height: ${size}px; background-color: rgb(0, 255, 255)`
  );

  return newBox;
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = (amount) => {
  const fragment = document.createElement("div");
  for (let i = 0; i <= amount; i += 1) {
    const size = 30 + i * 10;
    const box = createBox(size);
    fragment.append(box);
  }
  return boxesRef.append(fragment);
};

const boxesList = () => {
  const amount = Number(inputRef.value);
  createBoxes(amount);
};

const clear = () => {
  boxesRef.innerHTML = "";
};

inputRef.addEventListener("input", boxesList);
renderBtnRef.addEventListener("click", boxesList);
destroyBtnRef.addEventListener("click", clear);
