function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorVal = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.style.background = getRandomHexColor();
  colorVal.textContent = body.style.background;
});
