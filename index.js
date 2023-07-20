

function board(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    const blackBtn = document.getElementById("blackBtn");
    blackBtn.addEventListener("click", () => {
      square.removeEventListener("mouseover", erasorColor);
      square.addEventListener("mouseover", colorSquare);
    });

    const erasor = document.getElementById("erasorBtn");
    erasor.addEventListener("click", () => {
      square.removeEventListener("mouseover", colorSquare);
      square.addEventListener("mouseover", erasorColor);
    });

    const randomBtn = document.getElementById("randomBtn");
    randomBtn.addEventListener("click", () => {
      square.removeEventListener("mouseover", erasorColor);
      square.removeEventListener("mouseover", colorSquare);
      square.addEventListener("mouseover", randomColor);
    });

    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
      square.removeEventListener("mouseover", erasorColor);
      square.removeEventListener("mouseover", colorSquare);
      square.removeEventListener("mouseover", randomColor);
      square.style.backgroundColor = "white";
    });

    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}
board(16);

const inputValue = document.getElementById("input");
const sizeSetter = document.getElementById("sizeSetter");

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    board(input);
  } else {
    console.log("Too bi");
  }
}

sizeSetter.addEventListener(
  "click",
  inputValue.addEventListener("change", () => {
    changeSize(inputValue.value);
  })
);

function colorSquare() {
  this.style.backgroundColor = "black";
}

function erasorColor() {
  this.style.backgroundColor = "white";
}

function randomColor() {
  this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

