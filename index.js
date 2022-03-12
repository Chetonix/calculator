let numberBtns = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let del = document.querySelector(".del");
let displayScreen = document.getElementById("screen");
// let isOperatorSet = true;
let number1 = "";
let number2 = "";
let sign = "";
let isNum1Filled = false;
let isNum2Filled = false;
let result = ""
let numberClicked = false;
function handleNumber() {
    numberClicked = true;
    if (isNum1Filled == false) {
        number1 = number1 + this.textContent;
        console.log("num1", number1);

    } else {
        number2 = number2 + this.textContent;
        console.log("num2", number2);
    }
    // isOperatorSet = false;

}

function handleOperator() {
    // isOperatorSet = true;
    sign = this.textContent;
    console.log(sign);
    isNum1Filled = true;
    numberClicked = false;
}

function operate() {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    // console.log(number1, number2);
    if (sign == "/") {
        result = number1 / number2;
    } else if (sign == "*") {
        result = number1 * number2;
    } else if (sign == "-") {
        result = number1 - number2;
    } else if (sign == "+"){
        result = number1 + number2;
    } else if (sign == "%") {
        result = number1 % number2;
    } else {
        result = number1; //handle later
    }
    console.log("result", result);
    // result = String(result);
    displayScreen.value = result;
        // isOperatorSet = false;
        if(numberClicked) {
            
        } else {
            number1 = result;
            number2 = "";
            isNum1Filled = true;
            isNum2Filled = false;
        }
    



    // if (isOperatorSet === false){
    //     isNum1Filled = false;
    //     number1 = "";
    //     number2 = "";
    // } else {
    //     number1 = result;
    //     isNum1Filled = true;
    //     isNum2Filled = false;
    // }
    
    // if(isOperatorSet === false) {
    //     isNum1Filled = false;
    //     number1 = "";
    //     number2 = "";
    // } else {
    //     number1 = result;
    //     number2 = "";
    //     isNum1Filled = true;
    //     isNum2Filled = false;
    // }
}

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", handleNumber);
}
for (let operator of operators) {
    operator.addEventListener("click", handleOperator);
}

equal.addEventListener("click", operate);