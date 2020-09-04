const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");
const renderBtnRef = document.querySelector("button[data-action='render']");
const destroyBtnRef = document.querySelector("button[data-action='destroy']");

const createBox = (size) => {
  const newBox = document.createElement("div");
  newBox.classList.add("newBox");
  newBox.setAttribute(
    "style",
    `width: ${size}px; height: ${size}px; background-color: ${getRandomColor()}`
  );

  return newBox;
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = (amount) => {
  if (amount < 1) {
    return;
  }

  const fragment = document.createElement("div");
  fragment.classList.add("fragment");

  for (let i = 1; i <= amount; i += 1) {
    const size = 30 + i * 10;
    const box = createBox(size);
    fragment.append(box);
  }

  return boxesRef.append(fragment);
};

const boxesList = (event) => {
  const amount = Number(inputRef.value);
  createBoxes(amount);
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

renderBtnRef.addEventListener("click", boxesList);
destroyBtnRef.addEventListener("click", destroyBoxes);
