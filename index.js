let numberBtns = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
// let del = document.querySelector(".del");
let displayScreen = document.getElementById("screen");
// let isOperatorSet = true;
let number1 = "";
let number2 = "";
let sign = "";
let isNum1Filled = false;
let isNum2Filled = false;
let result = "";
// let prevOp = false;
// let prevNumber1 = "";
// let numberClicked = false;
let resultEvalued = false;
const handleNumber = (e) => {
    // console.log(e.target.value);
    if (e.target.value == "."){
        if (!isNum1Filled && number1.toString().includes(".")) {
            return;
        }
        else if(!isNum2Filled && number2.toString().includes(".")){
            return;
        }
    }


    if (resultEvalued) {
        // numberClicked = true;
        number1 = "";
        number2 = "";
        isNum1Filled = false;
        isNum2Filled = false;
    }
    
    if (isNum1Filled == false) {
        number1 = number1 + e.target.value;
        // number1 = number1 + this.textContent;
        console.log("num1", number1);
        displayScreen.value = number1;
        // prevNumber1 = number1;

    } else {
        number2 = number2 + e.target.value;
        // number2 = number2 + this.textContent;
        console.log("num2", number2);
        displayScreen.value = number2;
    }

    resultEvalued = false;
    // isOperatorSet = false;

}

function addDecimal (e) {
    handleNumber(e);

    // if (resultEvalued) {
    //     number1 = "0" + ".";
    //     isNum1Filled = false;
    //     handleNumber();
    //     resultEvalued = false;
    // }

    // if(isNum1Filled) {
    //     number2 = number2 + ".";

    // }
    //  else {
    //      number1 =  number1 + "." ;
    // }
}

function handleOperator() {
    // isOperatorSet = true;
    
    // if(prevOp){
    //     operate();
    //     prevOp = false;
    // }
    if(isNum2Filled) {
        operate();
    }

    if (resultEvalued) {
        number1 = result;
        number2 = "";
        isNum1Filled = true;
        isNum2Filled = false;
    }
    sign = this.textContent;
    console.log(sign);
    isNum1Filled = true;
    // numberClicked = false;
    resultEvalued = false;
    // prevOp = true;
    isNum2Filled =  true;

}

function operate() {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    console.log(number1, number2);

    

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
    result = Math.round((result + Number.EPSILON) * 100) / 100
    displayScreen.value = result;
    number2 = "";
    number1 = result;
    resultEvalued = true; 
    isNum2Filled = false;
        // isOperatorSet = false;
        // if(numberClicked) {
        //     number1 = "";
        //     isNum1Filled = false;
        //     isNum2Filled = false;
        // } else {
        //     number1 = result;
        //     isNum1Filled = true;
            
        // }
    



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

function clearScreen() {
    number1 = "";
    number2 = "";
    isNum1Filled = false;
    isNum2Filled = false;
    displayScreen.value = 0;
}

// function deleteAppendedChar(e) {
//     if(isNum1Filled) {
//         number1 = number1.toString().substring(0, number1.length - 1);
//         displayScreen.value = number1;
//     } else if (isNum2Filled) {
//         number2 = number2.toString().substring(0, number2.length - 1);
//         displayScreen.value = number2;

//     }
// }

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", handleNumber);
}
for (let operator of operators) {
    operator.addEventListener("click", handleOperator);
}

equal.addEventListener("click", operate);
decimal.addEventListener("click", addDecimal);
clear.addEventListener("click", clearScreen);
// del.addEventListener("click", deleteAppendedChar);