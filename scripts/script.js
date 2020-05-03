


function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(operator, a, b) {
    let total;
    switch (operator) {
        case "+":
            total = add(a, b);
            break;
        case "-":
            total = subtract(a, b);
            break;
        case "*":
            total = multiply(a, b);
            break;
        case "/":
            total = divide(a, b);
            break;
    }
    return total;
}



const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operatorButton");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equalButton");
const display = document.querySelector(".display")

operators.forEach((item) => {
    item.addEventListener("click", () => {
        operatorAction(item);
    })
})

numbers.forEach((item) => {
    item.addEventListener("click", () => {
        numberAction(item);
    })
})

clear.addEventListener("click", () => {
    clearCalculator();

})

equal.addEventListener("click", () => {
    equalAction();

})

let prevOperatorClick = 0;
let prevOperatorSign = "";
let operatorNum = 0;
let runningTotal;
let numValue = "";

function equalAction() {
    runningTotal = operate(prevOperatorSign, runningTotal, +numValue);
    let runningTotalTemp = runningTotal;
    clearCalculator();
    display.textContent = runningTotalTemp;

}

function numberAction(item) {
    if (prevOperatorClick == true) {
        display.textContent = "";

        //display snarkyMessage if divide by 0
        if (prevOperatorSign == "/" && item.getAttribute("data-key") == 0) {
            snarkyMessage();
            return;
        }
    }
    // do not allow more than one period
    if (numValue.includes(".") && item.getAttribute("data-key") == ".") {
        return;
    }

    display.textContent += item.getAttribute("data-key");
    numValue += item.getAttribute("data-key");
    prevOperatorClick = false;


}


function operatorAction(item) {

    if (item.getAttribute("data-key") == "+/-") {
        numValue = String(Number(numValue) * -1);
        display.textContent = numValue;
        return 
    }

    if (!runningTotal) {
        runningTotal = +numValue;
        console.log("Debug: initial " + runningTotal)
    }



    operatorNum += 1;

    if (operatorNum == 2) {

        runningTotal = operate(prevOperatorSign, runningTotal, +numValue);
        console.log("Debug: " + runningTotal);
        operatorNum = 0;

    }
    
    display.textContent = item.getAttribute("data-key");
    prevOperatorClick = true;
    numValue = "";
    prevOperatorSign = item.getAttribute("data-key");

}

function clearCalculator() {
    display.textContent = "";
    runningTotal = 0;
    operatorNum = 0;
    prevOperatorSign = "";
    prevOperatorClick = false;
    numValue = "";
}

function snarkyMessage() {
    display.textContent = "what the f monkeys??";
    return;
}





