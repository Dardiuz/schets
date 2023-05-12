const container = document.querySelector(".container");

//creating the grid field
const createGrid = (size) => {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      box.classList.add("grid-box");
      row.appendChild(box);
    }
  }
};

createGrid(16);
