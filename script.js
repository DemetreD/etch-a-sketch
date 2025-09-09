// selections
const container = document.querySelector("#container");
const newGrid = document.querySelector(".new__grid-btn");
const eraserBtn = document.querySelector(".eraser__btn");
const rainbowBtn = document.querySelector(".rainbow__btn");

const coloring = function (div) {
  div.addEventListener("mouseover", () => {
    div.style.background = "red";
  });
};

const rainbowColor = function (div) {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  let newColor = "rgb(" + color.join(", ") + ")";
  rainbowBtn.addEventListener("click", () => {
    div.addEventListener("mouseover", () => {
      div.style.background = newColor;
    });
  });
};

const eraser = function (div) {
  eraserBtn.addEventListener("click", () => {
    div.addEventListener("mouseover", () => {
      div.style.background = "#fff";
    });
  });
};

const board = function (size) {
  //   let amount = size * size;
  for (let row = 0; row < 257; row++) {
    // for (let col = 0; col < size; col++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
    rainbowColor(div);
    coloring(div);
    eraser(div);
    // }
  }
};

// newGrid.addEventListener("click", () => {
//   let inp = prompt("Put number from 1-100");
//   if (inp < 1 || inp > 100) {
//     inp = prompt("from 1-100!");
//   }
// });

board();
