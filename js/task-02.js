const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsGall = document.querySelector("#ingredients");

const makeGall = (ingredients) => {
  const gallEl = document.createElement("li");
  gallEl.classList.add("item");
  gallEl.textContent = ingredients;
  return gallEl;
};

const items = ingredients.map(makeGall);

ingredientsGall.append(...items);
