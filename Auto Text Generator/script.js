const variableTextEl = document.querySelector(".variable-text");
const cursorEl = document.querySelector(".cursor");

let words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];

const typeDelay = 100;
const erasingDelay = 100;
const newLetterDelay = 1500;
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[index].length) {
    variableTextEl.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    variableTextEl.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, newLetterDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});
