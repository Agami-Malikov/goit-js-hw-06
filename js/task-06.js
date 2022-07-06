const inp = document.querySelector("#validation-input");

inp.addEventListener("blur", () => {
  if (inp.value.length < 6) {
    inp.classList.add("invalid");
  } else {
    inp.classList.remove('invalid')
    inp.classList.add("valid");
  }
});
