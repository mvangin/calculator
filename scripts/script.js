const adder = document.querySelector(".add");
const display = document.querySelector(".display")
let runningTotal;

adder.addEventListener("click", () => {
})


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

const numbers = document.querySelectorAll(".number");
numbers.forEach((item) => {
    item.addEventListener("click", () => {
        if (operatorOn==1) {
            runningTotal = operate(operatorSign, runningTotal,item.getAttribute("data-key"));
            console.log(runningTotal);
            display.textContent = item.getAttribute("data-key");
        } else {
            display.textContent += item.getAttribute("data-key");
        }
        operatorOn = 0;
        operatorSign = "";
    })
})

const operators = document.querySelectorAll(".operatorButton");
operators.forEach((item) => {
    item.addEventListener("click", () => {
        if (!runningTotal) {
            runningTotal = display.textContent.trim();
            console.log("initial " + runningTotal)
        }
        
        display.textContent = item.textContent;
        operatorOn = 1;
        operatorSign = item.textContent.trim();

    })
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    display.textContent = "";
    runningTotal = 0;
})

const equal = document.querySelector(".equalButton")

equal.addEventListener("click", () => {
    display.textContent = runningTotal;
})

/*
function sum(array) {
	return array.reduce((sum, item) => sum + item,0);

}

 function multiply(array) {

	if (array === []) {
		return 0;
	}

	const multiplied = array.reduce((total, item) => {
		return total * item;
	},1);

	return multiplied;
}
*/


