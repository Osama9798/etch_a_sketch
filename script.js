const gridContainer = document.querySelector("#gridContainer");
function create(num) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < num; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let j = 0; j < num; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-box");

      rowContainer.appendChild(div);
    }
    gridContainer.appendChild(rowContainer);
  }
  playGame();
}
function playGame() {
  const gridBox = Array.from(document.querySelectorAll(".grid-box"));
  gridBox.forEach((elem) =>
    elem.addEventListener("mousemove", (elem) => {
      elem.target.classList.add("color");
    })
  );
}
create(16);
const gridBtn = document.querySelector("#gridBtn");
gridBtn.addEventListener("click", (e) => {
  let num = prompt(alert("Enter the sixe of the grid max 100"));
  create(num);
});
