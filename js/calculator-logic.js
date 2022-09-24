// ----------------- DOM ELEMENTS -----------------
const screenText = document.getElementById('screen-text');
const buttons = document.getElementsByTagName('button');
const equalsButton = document.getElementById('button-equals');

// ----------------- UTILITY FNS -----------------

// print number to screen
const printNumber = (val) => {
    if (screenText.innerText === '0' && val !== '.') {
        screenText.innerText = val;
    } else {
        screenText.innerText += val;
    }
};

// delete last character from screen
const delOneChar = () => {
    if (screenText.innerText.length === 1) {
        screenText.innerText = '0';
    } else {
        screenText.innerText = screenText.innerText.slice(0, screenText.innerText.length - 1);
    }
};

const addDecimal = () => {
    if (!screenText.innerText.includes('.')) {
        printNumber('.');
    }
};

// clear all input
const clearInput = () => {
    screenText.innerText = '0';
};

// addition
const addNumbers = () => {
    const firstValue = screenText.innerText;
    screenText.innerText = '0';

    equalsButton.addEventListener('click', () => {
        const secondValue = screenText.innerText;

        const result = +firstValue + +secondValue;

        clearInput();
        printNumber(result);
    });
};

// click equals
const calculateValue = () => {
    values.push(screenText.innerText);
    console.log(values);

    const strValues = values.join(' ');
    console.log(strValues);
    const result = eval(strValues);
    console.log(result);

    clearInput();
    printNumber(result);

    // reset values
    values = [];
};

// add value to array
const pushToOperationsArray = (e) => {
    const button = e.target;
    if (screenText.innerText !== '0') {
        values.push(screenText.innerText);
    }
    console.log(values);

    // allowing for changing operation
    if (!'+-*/'.includes(values[values.length - 1])) {
        values.push(button.classList[2]);
    } else {
        values[values.length - 1] = button.classList[2];
    }
    clearInput();
};

// ----------------- BUTTON LOGIC -----------------

let values = [];
for (let button of buttons) {
    // create values array for calculations

    // ----------------- NUMBER INPUT -----------------
    if ('0123456789'.includes(button.classList[1])) {
        button.addEventListener('click', (e) => {
            const val = e.target.classList[1];
            printNumber(val);
        });
    }
    // ----------------- BACKSPACE -----------------
    if (button.classList[1] === 'delete') {
        button.addEventListener('click', delOneChar);
    }

    // ----------------- CLEAR INPUT -----------------
    if (button.classList[1] === 'reset') {
        button.addEventListener('click', () => {
            clearInput();
            values = [];
        });
    }
    // ----------------- ADD DECIMAL -----------------
    if (button.classList[1] === 'decimal-point') {
        button.addEventListener('click', addDecimal);
    }

    // ----------------- ADD OPERATIONS -----------------
    ['addition', 'subtraction', 'product', 'division'].forEach((operation) => {
        if (button.classList[1] === operation) {
            button.addEventListener('click', pushToOperationsArray);
        }
    });

    if (button.classList[1] === 'equals') {
        button.addEventListener('click', calculateValue);
    }
}

// ----------------- KEYBOARD LOGIC  -----------------

document.addEventListener('keydown', (e) => {
    // ----------------- NUMBER INPUT -----------------
    if ('0123456789'.includes(e.key)) {
        printNumber(e.key);
    }

    // ----------------- BACKSPACE -----------------
    if (e.key === 'Backspace') {
        delOneChar();
    }

    // ----------------- ADD DECIMAL -----------------
    if (e.key === '.') {
        addDecimal();
    }

    // ----------------- ADD OPERATIONS -----------------

    // ----------------- ADD ENTER KEY (=) -----------------
    if (e.key === 'Enter') {
        calculateValue(button);
    }
});
