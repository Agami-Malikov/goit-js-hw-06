const inp = document.querySelector("#validation-input");

inp.addEventListener("blur", () => {
  if (inp.value.length < inp.dataset.length) {
    inp.classList.add("invalid");
  } else {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  }
});


