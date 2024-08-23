const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value >= '0' && value <= '9') {
            handleNumber(value);
        } else if (value === '.') {
            handleDecimal();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            handleOperator(value);
        } else if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearCalculator();
        }
    });
});

function handleNumber(value) {
    if (operator && !previousInput) {
        previousInput = currentInput;
        currentInput = '';
    }
    currentInput += value;
    updateDisplay(currentInput); // it will update the value each time.

}

function handleDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function handleOperator(op) {
    if (currentInput) {
        operator = op;
    }
}

function calculate() {
    if (previousInput && currentInput && operator) {
        const result = eval(`${previousInput} ${operator} ${currentInput}`); 
        currentInput = result.toString();
        previousInput = '';
        operator = '';
        updateDisplay(currentInput);
    }
}

function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    display.textContent = value;
}