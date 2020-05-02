


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
            total= subtract(a, b);
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

let operatorOn = 0;
let operatorSign = "";
let operatorNum =0;
let runningTotal;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operatorButton");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equalButton");
const display = document.querySelector(".display")


numbers.forEach((item) => {
    item.addEventListener("click", () => {
        if (operatorOn == 1) {
            display.textContent = "";
        }
            display.textContent += item.getAttribute("data-key");
        
        operatorOn = 0;
    })
})


operators.forEach((item) => {
    item.addEventListener("click", () => {
       
        if (!runningTotal) {
            runningTotal = display.textContent.trim();
            console.log("initial " + runningTotal)
        }
        
        operatorNum += 1;
        if (operatorNum == 2) {
            runningTotal = operate(operatorSign, runningTotal,display.textContent.trim());
            console.log(runningTotal);
            operatorNum = 0;
            
        }

        display.textContent = item.textContent;
        operatorOn = 1;
        operatorSign = item.textContent.trim();

    })
})


clear.addEventListener("click", () => {
    display.textContent = "";
    runningTotal = 0;
    operatorNum = 0;
    operatorSign = "";
    operatorOn = 0;
})




equal.addEventListener("click", () => {
    
    runningTotal = operate(operatorSign, runningTotal,display.textContent.trim());
    display.textContent = runningTotal;
    runningTotal = 0;
})


