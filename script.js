let displayValue = "";
let operationSelected;
const displayScreen = document.querySelector(".display-screen");
const calcButton = document.querySelector(".calc-buttons");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, a, b) {
  if (operation == "+") {
    add(a, b);
  } else if (operation == "-") {
    subtract(a, b);
  } else if (operation == "*") {
    multiply(a, b);
  } else {
    divide(a, b);
  }
}

function screen(key) {
  if (key === "+") {
    displayScreen.textContent = displayValue;
  } else {
    displayValue += key;
  }
}

function resetDisplay() {
  displayScreen.textContent = "";
  displayValue = '';  
}

calcButton.addEventListener("click", function (e) {
  if(e.target.innerText === 'C') {
    resetDisplay();
  }
  screen(e.target.innerText);
});
