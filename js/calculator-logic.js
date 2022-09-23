// ----------------- DOM ELEMENTS -----------------
const screenText = document.getElementById('screen-text');
const buttons = document.getElementsByTagName('button');

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
});
