const cursorEl = document.querySelector(".cursor-div");

document.addEventListener("mousemove", (event) => {
  moveCursor(event.pageX, event.pageY);
});

const moveCursor = function (pageX, pageY) {
  cursorEl.style.left = pageX + "px";
  cursorEl.style.top = pageY + "px";
};
