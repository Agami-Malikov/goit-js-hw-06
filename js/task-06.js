const inp = document.querySelector("#validation-input");

inp.addEventListener("blur", () => {
  if (inp.value.length === Number(inp.dataset.length)) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.add("invalid");
    inp.classList.remove("valid");
  }
});


