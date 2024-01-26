const iconEl = document.querySelector("#toggle");
const line1El = document.querySelector(".line1");
const line2El = document.querySelector(".line2");
const lineEl = document.querySelectorAll(".line");
const navListEl = document.querySelector(".nav-list");

console.log(navListEl);

let togglerNumber = 1;

iconEl.addEventListener("click", () => {
  if (togglerNumber) {
    togglerNumber = 0;
    iconEl.style.gap = "0rem";
    line1El.style.transform = "rotate(-45deg)";
    line2El.style.transform = "rotate(45deg)";
    lineEl[0].style.transformOrigin = "55%";
    lineEl[1].style.transformOrigin = "55%";
    navListEl.classList.add("hide");
  } else {
    togglerNumber = 1;
    iconEl.style.gap = "1rem";
    line1El.style.transform = "rotate(0deg)";
    line2El.style.transform = "rotate(0deg)";
    navListEl.classList.remove("hide");
  }
  console.log(iconEl);
});
