const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const button = document.querySelector("button");
const logBox = document.querySelector(".event div");

function handleEvent(message) {
  return `✔ ${message}`;
}

// UI update function
function updateDOM(text) {
  const p = document.createElement("p");
  p.textContent = text;
  logBox.appendChild(p);
}


button.addEventListener("click", () => {
  const result = handleEvent("Button clicked");
  updateDOM(result);
});

parent.addEventListener("click", () => {
  const result = handleEvent("Parent clicked");
  updateDOM(result);
});

grandparent.addEventListener("click", () => {
  const result = handleEvent("Grandparent clicked");
  updateDOM(result);
});
