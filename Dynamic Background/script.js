const backgroundEl = document.querySelector(".background");
const buttonEl = document.querySelector(".button");
const hexCodeEl = document.querySelector(".hex-code");

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

buttonEl.addEventListener("click", () => {
  let color = randomColor();
  backgroundEl.style.backgroundColor = color;
  hexCodeEl.innerHTML = color;
});
