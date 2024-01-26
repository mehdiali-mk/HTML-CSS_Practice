let maxWidth = window.screen.availWidth;
let maxHeight = window.screen.availHeight;
let newXPosition = [],
  newYPosition = [];

const dotsEl = document.querySelectorAll(".dot");

function newPosition() {
  for (let i = 0; i < 40; i++) {
    newYPosition[i] = Math.floor(Math.random() * 100);
    newXPosition[i] = Math.floor(Math.random() * 100);
  }
}
console.log(dotsEl);
function changePosition() {
  newPosition();
  for (let i = 0; i < 40; i++) {
    dotsEl[i].style.top = newYPosition[i] + "%";
    dotsEl[i].style.left = newXPosition[i] + "%";
  }
}
