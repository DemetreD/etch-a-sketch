// selections
const container = document.querySelector("#container");

const board = function () {
  for (let row = 0; row < 257; row++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
  }
};

board();
