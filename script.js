const numberBtn = document.querySelectorAll(".numbers");
const operatorBtn = document.querySelectorAll(".operators");
const extrasBtn = document.querySelectorAll(".extras");
const screen = document.querySelector("#screen");
let value = 0;

for (const button of numberBtn) {
  button.addEventListener ("click", () => {
    screen.innerText += button.innerText;
  });
}

for (const button of operatorBtn) {
  button.addEventListener ("click", () => {
    screen.innerText += " " + button.innerText + " ";
  });
}
