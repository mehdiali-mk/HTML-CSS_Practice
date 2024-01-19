const greyHeart = document.querySelector(".grey-heart");
const redHeart = document.querySelector(".red-heart");

greyHeart.addEventListener("click", () => {
  redHeart.classList.add("fill-color");
  redHeart.classList.add("animation");
});

redHeart.addEventListener("click", () => {
  redHeart.classList.remove("fill-color");
  redHeart.classList.remove("animation");
});
