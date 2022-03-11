let numberBtns = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let del = document.querySelector(".del");
let displayScreen = document.getElementById("screen");

let number1 = "0";
let number2 = "0";
let sign = "";
let isNum1Filled = false;
let isNum2Filled = false;
let result = "0"

function handleNumber() {
    if (isNum1Filled == false) {
        number1 = number1 + this.textContent;
        console.log(number1);
    } else {
        number2 = number2 + this.textContent;
        console.log(number2);
    }
}

function handleOperator() {
    sign = this.textContent;
    console.log(sign);
    isNum1Filled = true;
}

function operate(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (sign == "/") {
        result = num1 / num2;
    } else if (sign == "*") {
        result = num1 * num2;
    } else if (sign == "-") {
        result = num1 - num2;
    } else if (sign == "+"){
        result = num1 + num2;
    } else if (sign == "%") {
        result = num1 % num2;
    } else {
        result = num1; //handle later
    }
    console.log(result);
    // result = String(result);
    displayScreen.value = result;
}

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", handleNumber);
}
for (let operator of operators) {
    operator.addEventListener("click", handleOperator);
}

equal.addEventListener("click", ()=> operate(number1, number2));