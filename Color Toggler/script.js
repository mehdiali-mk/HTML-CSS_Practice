const switchEl = document.querySelector("#switch-checkbox");
const backgroundEl = document.querySelector(".background");
const socialEl = document.querySelectorAll(".nav__social-link");

switchEl.addEventListener("click", () => {
  if (switchEl.checked) {
    backgroundEl.style.backgroundColor = "#191825";
    socialEl.forEach((element) => {
      element.style.color = "White";
    });
  } else {
    backgroundEl.style.backgroundColor = "White";
    socialEl.forEach((element) => {
      element.style.color = "#191825";
    });
  }
});
