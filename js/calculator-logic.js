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

const constructOperationsArray = () => {
    let values = [];

    operationButtons = {
        '+': document.getElementById('button-addition'),
        '-': document.getElementById('button-subtraction'),
        '*': document.getElementById('button-product'),
        '/': document.getElementById('button-division'),
    };

    document.getElementById('button-reset').addEventListener('click', () => {
        values = [];
    });

    for (let operation in operationButtons) {
        operationButtons[operation].addEventListener('click', () => {
            if (screenText.innerText !== '0') {
                values.push(screenText.innerText);
            }

            // allowing for changing operation
            if (!'+-*/'.includes(values[values.length - 1])) {
                values.push(operation);
            } else {
                values[values.length - 1] = operation;
            }
            clearInput();
        });
    }

    document.getElementById('button-equals').addEventListener('click', () => {
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
    });
};

constructOperationsArray();

// const subtractNumbers = () => {
//     const firstValue = screenText.innerText;
//     screenText.innerText = '0';

//     equalsButton.addEventListener('click', () => {
//         const secondValue = screenText.innerText;

//         const result = +firstValue - +secondValue;

//         clearInput();
//         printNumber(result);
//     });
// };

// const multiplyNumbers = () => {
//     const firstValue = screenText.innerText;
//     screenText.innerText = '0';

//     equalsButton.addEventListener('click', () => {
//         const secondValue = screenText.innerText;

//         const result = +firstValue * +secondValue;

//         clearInput();
//         printNumber(result);
//     });
// };

// const divideNumbers = () => {
//     const firstValue = screenText.innerText;
//     screenText.innerText = '0';

//     equalsButton.addEventListener('click', () => {
//         const secondValue = screenText.innerText;

//         const result = +firstValue / +secondValue;

//         clearInput();
//         printNumber(result);
//     });
// };

// ----------------- BUTTON LOGIC -----------------

for (let button of buttons) {
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
        });
    }
    // ----------------- ADD DECIMAL -----------------
    if (button.classList[1] === 'decimal-point') {
        button.addEventListener('click', addDecimal);
    }

    // // ----------------- ADDITION -----------------
    // if (button.classList[1] === 'addition') {
    //     button.addEventListener('click', addNumbers);
    // }

    // // ----------------- SUBTRACTION -----------------
    // if (button.classList[1] === 'subtraction') {
    //     button.addEventListener('click', subtractNumbers);
    // }

    // // ----------------- MULTIPLICATION -----------------
    // if (button.classList[1] === 'product') {
    //     button.addEventListener('click', multiplyNumbers);
    // }

    // // ----------------- DIVISION -----------------
    // if (button.classList[1] === 'division') {
    //     button.addEventListener('click', divideNumbers);
    // }
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

    // // ----------------- ADDITION -----------------
    // if (e.key === '+') {
    //     addNumbers();
    // }

    // // ----------------- SUBTRACTION -----------------
    // if (e.key === '-') {
    //     subtractNumbers();
    // }

    // // ----------------- MULTIPLICATION -----------------
    // if (e.key === '*') {
    //     multiplyNumbers();
    // }

    // // ----------------- DIVISION -----------------
    // if (e.key === '/') {
    //     divideNumbers();
    // }
});
