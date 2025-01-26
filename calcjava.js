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

let a = 3;
let operator = "+";
let b = 5;

function operate(operator, a, b) {
    let result;
    if( operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else if (operator === "/") {
        return divide(a, b)
    } else {
        return "Invalid operator"
    }
}

const buttons = document.querySelectorAll("button")
buttons.