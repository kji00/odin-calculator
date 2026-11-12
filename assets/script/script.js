function addition(num1, num2){
    return num1 + num2;
};

function subtraction(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(dividend, divisor){
    return dividend / divisor;
};

const add = '+';
const minus = '-';
const times = '*';
const division = '/';

function operate(num1, operator, num2){
    const sign = operator;

    switch (sign) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
};

console.log(operate(5, '*', 3));

