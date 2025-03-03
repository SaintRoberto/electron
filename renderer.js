const button = document.querySelector("button");
const count = document.querySelector("#count");
let counter = 0;
button.addEventListener("click", () => {
  count.textContent = counter ++;
});
