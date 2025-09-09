// selections
const container = document.querySelector("#container");
const erasorBtn = document.querySelector(".eraser__btn");
const rainbowBtn = document.querySelector(".rainbow__btn");
const newSizeInput = document.querySelector("#newSize");
const newSizeBtn = document.querySelector(".new__size-btn");
const containerColor = document.querySelector("#containerColor");

const coloring = function () {
  this.style.background = containerColor.value;
};

const randomColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  this.style.background = `rgb(${r},${g},${b})`;
};

const erasor = function () {
  this.style.background = "#fff";
};

const board = function (size) {
  const amount = size * size;

  const cellSize = 100 / size;

  container.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.style.flex = `0 0 ${cellSize}%`;
    div.style.height = `${500 / size}px`;
    container.appendChild(div);

    div.addEventListener("mouseover", coloring);
    containerColor.addEventListener("click", () => {
      div.removeEventListener("mouseover", erasor);
      div.addEventListener("mouseover", coloring);
    });

    erasorBtn.addEventListener("click", () => {
      currentMode = "erasor";
      div.addEventListener("mouseover", coloring);
      div.addEventListener("mouseover", erasor);
    });

    rainbowBtn.addEventListener("click", () => {
      currentMode = "random";
      div.removeEventListener("mouseover", coloring);
      div.removeEventListener("mouseover", erasor);
      div.addEventListener("mouseover", randomColor);
    });
  }
};

//default board grid
board(16);

const newSize = function () {
  newSizeBtn.addEventListener("click", () => {
    let input = Number(newSizeInput.value);

    if (input >= 1 && input <= 100) {
      board(input);
    } else {
      alert("Please a num between 1-100");
    }
  });
};

//users new board grid
newSize();
