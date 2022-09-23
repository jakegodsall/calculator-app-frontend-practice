// ----------------- IMPORTANT DOM ELEMENTS -----------------
const screenText = document.getElementById('screen-text');

// ----------------- UTILITY FNS -----------------

const printNumber = (val) => {
    if (screenText.innerText === '0') {
        screenText.innerText = val;
    } else {
        screenText.innerText += val;
    }
};

// ----------------- NUMBER INPUT -----------------

// USING BUTTONS
const numericalButtons = {};
for (let i = 0; i <= 9; i++) {
    numericalButtons[`button-${i}`] = document.getElementById(`button-${i}`);
}

Object.values(numericalButtons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const val = e.target.classList[1];
        printNumber(val);
    });
});

// USING KEYS
document.addEventListener('keydown', (e) => {
    if ('0123456789'.includes(e.key)) {
        printNumber(e.key);
    }
});

// ----------------- CLEAR INPUT -----------------

const clearInput = () => {
    screenText.innerText = '0';
};

document.getElementById('button-reset').addEventListener('click', clearInput);
