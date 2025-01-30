//function for addition
function add(a, b) {
    return a + b;
}

//function for subtraction
function subtract(a, b) {
    return a - b;
}
//function for multiplication
function multiply(a, b) {

    return a * b;
}

//function for division
function divide(a, b) {
    return b === 0 ? "Error!" : a / b;
}

let a = ""; //store first number
let b = ""; //store second number
let operator = null;

//function to perform operation
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

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");


//for digits clicks
digits.forEach((button) => {
    button.addEventListener("click", () => {
       if (operator === null) {
            a += button.textContent;
            display.innerHTML = a;
       }
       else{
            b += button.textContent;
           display.innerHTML = b;
       }
    });
});

//for operator clicks
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if(a !== "") {
            operator = button.textContent;
        }
    })
})

//for equal clicks
equal.addEventListener("click", () =>{
    if(a !== "" && b !== "" && operator !== null){
        let result = operate(operator, parseFloat(a), parseFloat(b));
        display.innerHTML = result;       
        a = result.toString(); //store result in 'a' for further calculation
        b = ""; //reset 'b'
        operator = null; //reset operator 
    }
});

//for clear button
clear.addEventListener("click", () => {
    a = "";
    b = "";
    operator = null;
    display.innerHTML = "0";
});