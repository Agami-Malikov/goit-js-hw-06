const inp = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inp.addEventListener("input", () => {
  if (inp.value.length <= 2) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inp.value;
  }
});
