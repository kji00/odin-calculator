const initialState = {
  firstNumber: "",
  operator: null,
  secondNumber: "",
  displayEquation: "",
  shouldResetDisplay: false,
};

const calc = { ...initialState };

const btn = document.querySelectorAll(".btn");
const showDisplay = document.querySelector("#display-box");

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

function handleEquals() {
  const answer = operate(
    Number(calc.firstNumber),
    calc.operator,
    Number(calc.secondNumber),
  );
  const rounded = Math.round((answer + Number.EPSILON) * 100) / 100;
  showDisplay.textContent = `${rounded}`;
  console.log(answer);
}

function handleDecimal(sign) {
  if (!calc.operator && calc.firstNumber.includes(".")) {
    return;
  }
  if (calc.operator && calc.secondNumber.includes(".")) {
    return;
  } else {
    handleNumber(sign);
  }
}

function handleNumber(digit) {
  if (!calc.firstNumber) {
    calc.firstNumber = digit;
    updateDisplay(digit);
    console.log(`In handleNumber firstNumber: ${calc.firstNumber}`);
  } else if (calc.firstNumber && !calc.operator) {
    calc.firstNumber += digit;
    updateDisplay(digit);
    console.log(
      `In handleNumber firstNumber with no operator: ${calc.firstNumber}`,
    );
  } else if (calc.firstNumber && calc.operator) {
    calc.secondNumber += digit;
    updateDisplay(digit);
    console.log(
      `In handleNumber secondNumber with operator: ${calc.secondNumber}`,
    );
  }
}

function handleOperator(op) {
  if (!calc.operator) {
    calc.operator = op;
    updateDisplay(op);
  }
  console.log(`In handleOperator function ${calc.operator}`);
}

function updateDisplay(value) {
  if (value === "clear") {
    Object.assign(calc, initialState);
    showDisplay.textContent = 0;
  } else {
    calc.displayEquation += value;
    showDisplay.textContent = `${calc.displayEquation}`;
  }
}

function handleClick() {
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selection = e.target.dataset;
      if (selection.number) {
        handleNumber(selection.number);
      } else if (selection.operator) {
        handleOperator(selection.operator);
      } else if (selection.equals) {
        handleEquals(selection.equals);
      } else if (selection.decimal) {
        console.log(selection.decimal);
        handleDecimal(selection.decimal);
      } else if (selection.action) {
        updateDisplay(selection.action);
      }
    });
  });
}

handleClick();
