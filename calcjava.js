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
        result = add(a, b)
    } else if (operator === "-") {
        result = subtract(a, b)
    } else if (operator === "*") {
        result = multiply(a, b)
    } else if (operator === "/") {
        result = divide(a, b)
    } else {
        result = "Invalid operator"
    }
    return Number.isInteger(result) ? result : result.toFixed(4);
}

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal")
const del = document.querySelector("#del")


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

//for decimal button clicks
decimal.addEventListener("click", () => {
    decimal.disabled = true; //disable after first click
})

//for delete button
del.addEventListener("click", () => {
    if (display.innerHTML.length === 1 || display.innerHTML === "0") {
        display.innerHTML = "0";
        if (b !== "") {
            b = "";
        } else {
            a = null;
            operator = null;
        }
    } else {
        display.innerHTML = display.innerHTML.slice(0, -1);

        // Update values properly
        if (b !== "") {
            b = b.slice(0, -1);
        } else if (operator !== null) {
            operator = null; // Remove operator if deleted
        } else if (a !== null) {
            a = a.toString().slice(0, -1);
            if (a === "") a = null; // Ensure `a` doesn't become empty string
        }
    }
});

//for operator clicks
operators.forEach((button) => {
    button.addEventListener("click", () => {
        decimal.disabled = false; //enable after operation is clicked
        if(a !== "" && b === "") {
            operator = button.textContent;
        } else if (a !== "" && b !=="") {
            let result = operate(operator, parseFloat(a), parseFloat(b));
            display.innerHTML = result;
            operator = button.textContent;
            a = result.toString();
            b = "";

        }
    })
})

//for equal clicks
equal.addEventListener("click", () =>{
    if(a !== "" && b !== "" && operator !== null){
        let result = operate(operator, parseFloat(a), parseFloat(b));
        display.innerHTML = result;       
        a = result; //store result in 'a' for further calculation
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
})


