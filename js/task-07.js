const inp = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inp.addEventListener("input", () => {
  text.style.fontSize = `${inp.value}px`;
});
