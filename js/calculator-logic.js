// ----------------- DOM ELEMENTS -----------------
const screenText = document.getElementById('screen-text');
const buttons = document.getElementsByClassName('button');

const onOffSwitch = document.getElementById('on-off');
const decimalButton = document.getElementById('button-decimal');
const delButton = document.getElementById('button-del');
const equalsButton = document.getElementById('button-equals');
const resetButton = document.getElementById('button-reset');
const numericalButtons = [];
const operationButtons = [];

// creating lists of buttons
for (let button of buttons) {
    // create event listeners for all
    if ('0123456789'.includes(button.classList[1])) {
        numericalButtons.push(button);
    } else if ('+-*/'.includes(button.classList[2])) {
        operationButtons.push(button);
    }
}

// ----------------- ES6 CALCULATOR CLASS -----------------
class Calculator {
    constructor() {
        this.initialValue = 0;
        this.secondValue = 0;
        this.operation = '';
    }

    insertNumber(value) {
        if (this.operation === '') {
            if (this.initialValue === 0) {
                this.initialValue = value;
            } else {
                this.initialValue += value;
            }
            this.printToScreen('initial');

            console.log('Initial', this.initialValue);
        } else {
            screenText.innerText = this.secondValue;
            if (this.secondValue === 0) {
                this.secondValue = value;
            } else {
                this.secondValue += value;
            }
            this.printToScreen('second');

            console.log('Second', this.secondValue);
        }
    }

    insertOperation(value) {
        if (this.operation !== '') {
            this.calculate();
        }
        this.operation = value;

        console.log(this.operation);
    }

    calculate() {
        if (this.operation === '') {
            return;
        }

        const result = eval(`${this.initialValue} ${this.operation} ${this.secondValue}`);
        console.log('calculation', result);
        this.initialValue = result;
        this.secondValue = 0;
        this.printToScreen('initial');

        console.log(this.initialValue, this.secondValue);
    }

    resetValues() {
        this.initialValue = 0;
        this.secondValue = 0;
        this.operation = '';
        this.printToScreen('initial');
    }

    addDecimalPoint() {
        if (this.operation === '') {
            if (!this.initialValue.includes('.')) {
                this.initialValue += '.';
                this.printToScreen('initial');
            }
        } else {
            if (!this.secondValue.includes('.')) {
                this.secondValue += '.';
                this.printToScreen('second');
            }
        }
    }

    delOneChar() {
        if (this.operation === '') {
            if (this.initialValue === 0) {
                return;
            } else if (this.initialValue.length === 1) {
                this.initialValue = 0;
            } else {
                this.initialValue = this.initialValue.slice(0, this.initialValue.length - 1);
            }
            this.printToScreen('initial');
        } else {
            if (this.secondValue.length === 1) {
                this.secondValue = 0;
            } else {
                this.secondValue = this.secondValue.slice(0, this.secondValue.length - 1);
            }
            this.printToScreen('second');
        }
        console.log(this.initialValue, this.secondValue);
    }

    printToScreen(which) {
        if (which === 'initial') {
            screenText.innerText = this.initialValue;
        } else if (which === 'second') {
            screenText.innerText = this.secondValue;
        }
    }

    turnOff() {
        screenText.innerText = '';
    }
}

const calc = new Calculator();

// ----------------- BUTTON EVENT LISTENERS -----------------

// event listeners for numerical buttons
numericalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.classList[1];

        calc.insertNumber(value);
    });
});

// event listeners for operation buttons
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const operation = button.classList[2];

        calc.insertOperation(operation);
    });
});

// event listener for reset button
resetButton.addEventListener('click', () => {
    calc.resetValues();
});

// event listener for equals button
equalsButton.addEventListener('click', () => {
    calc.calculate();
});

// event listener for del button
delButton.addEventListener('click', () => {
    calc.delOneChar();
});

// event listener for decimal point button
decimalButton.addEventListener('click', () => {
    calc.addDecimalPoint();
});

// event listener for onOff swtich
onOffSwitch.addEventListener('click', (e) => {
    e.target.classList.toggle('off');

    if (e.target.classList.contains('off')) {
        e.target.innerHTML = 'OFF';
        screenText.style.visibility = 'hidden';
    } else {
        e.target.innerHTML = 'ON';
        screenText.style.visibility = 'visible';
        calc.resetValues();
    }
});
