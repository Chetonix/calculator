let numberBtns = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let del = document.querySelector(".del");

let number1 = "0";
let number2 = "0";
let isNum1Filled = false;
let isNum2Filled = false;
function addNumber() {
    if (isNum1Filled == false) {
        number1 = number1 + this.textContent;
        // console.log(number1);
    }
}





for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", addNumber);
}