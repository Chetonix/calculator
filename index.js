let numberBtns = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let del = document.querySelector(".del");

let number1 = "0";
let number2 = "0";
let sign = "";
let isNum1Filled = false;
let isNum2Filled = false;
function handleNumber() {
    if (isNum1Filled == false) {
        number1 = number1 + this.textContent;
        console.log(number1);
    }
}
function handleOperator() {
    sign = this.textContent;
    console.log(sign);
}




for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", handleNumber);
}
for (let operator of operators) {
    operator.addEventListener("click", handleOperator);
}

