const calc = {
  firstNumber: "",
  operator: null,
  secondNumber: "",
  shouldResetDisplay: false,
};
const btn = document.querySelectorAll(".btn");

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(dividend, divisor) {
  return dividend / divisor;
}

function operate(num1, operator, num2) {

  switch (operator) {
    case "+":
      return addition(num1, num2);
    case "-":
      return subtraction(num1, num2);
    case "*":
      return multiplication(num1, num2);
    case "/":
      return division(num1, num2);
  }
}

function handleNumber(digit) {
  if (!calc.firstNumber){
      calc.firstNumber = digit;
      if(calc.firstNumber.includes('.')){
        return;
      }
      console.log(`In handleNumber firstNumber: ${calc.firstNumber}`);
  }
  else if (calc.firstNumber && !calc.operator){
    calc.firstNumber += digit;
    console.log(`In handleNumber firstNumber with no operator: ${calc.firstNumber}`);
  } else if (calc.firstNumber && calc.operator){
    calc.secondNumber += digit;
    console.log(`In handleNumber secondNumber with operator: ${calc.secondNumber}`);
  }
}

function handleOperator(op) {
    if (!calc.operator){
        calc.operator = op;
    }
  console.log(`In handleOperator function ${calc.operator}`);
}

function handleEquals() {
    console.log(operate(Number(calc.firstNumber), calc.operator, Number(calc.secondNumber)))
}

function updateDisplay() {}

function handleClick() {
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selection = e.target.dataset;
      if (selection.number) {
        handleNumber(selection.number);
      } else if (selection.operator) {
        handleOperator(selection.operator);
      } else if (selection.action) {
        updateDisplay();
      } else if (selection.equals) {
        handleEquals(selection.equals)
      }
    });
  });
}

handleClick();


/* 



*/