const calculatorScreen = document.querySelector('.calculator-screen');


let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';


const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}


const number = document.querySelectorAll(".number");

number.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});


const inputOperator = (operator) => {

    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }

    calculationOperator = operator;
    currentNumber = '0';
}


const operator = document.querySelectorAll('.operator');

operator.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    });
});



const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}




const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});



const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};


const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});


const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}


decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});


;