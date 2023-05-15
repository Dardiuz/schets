const container = document.querySelector(".container");
let popup = document.querySelector("#popupButton");

let color = "black";
let click = true;

//creating the grid field
const createGrid = (size) => {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      box.classList.add("grid-box");
      box.addEventListener("mouseenter", drawingPen);
      row.appendChild(box);
    }
  }
};

popup.addEventListener("click", function () {
  let size = getSize();
  container.replaceChildren();
  createGrid(size);
});

function getSize() {
  let input = prompt("Give the Size");
  let message = document.querySelector("#message");
  if (input == "") {
    message.innerHTML = "Please provide a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Please provide a number between 1 and 100";
  } else {
    message.innerHTML = "the field is created! you can start drawing!";
    return input;
  }
}

createGrid(16);

function drawingPen() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  const container = document.querySelector(".container");
  let row = container.querySelectorAll("div");
  row.forEach((div) => (div.style.backgroundColor = "white"));
}
