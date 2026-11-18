const add = '+';
const minus = '-';
const multiply = '*';
const divide = '/';
const btn = document.querySelectorAll(".btn");

function addition(num1, num2){
    return num1 + num2;
};

function subtraction(num1, num2){
    return num1 - num2;
};

function multiplication(num1, num2){
    return num1 * num2;
};

function division(dividend, divisor){
    return dividend / divisor;
};

function operate(num1, operator, num2){
    const sign = operator;

    switch (sign) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '/':
            return division(num1, num2);
    }
};

function getInput(){
    btn.forEach(button => {
        button.addEventListener("click", (e) => {
            const selection = e.target.dataset;
            console.log(selection);
        })
    })
}


getInput();
// console.log(operate(5, '*', 3));

