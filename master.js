let button = document.querySelectorAll('.calculator-row button');
let clear = document.querySelector('.calculator-row .clear');
let del = document.querySelector('.calculator-row .delete');
let equal = document.querySelector('.operator.equal');
let display = document.querySelector('.display-area');
let justCalculated = false;

button.forEach((button) => {
    button.addEventListener('click', () => {

        if (button !== clear && button !== del && button !== equal) {

            let buttonText = button.textContent;

            if (justCalculated) {
                display.textContent = '';
                justCalculated = false;
            }

            if (display.textContent === '0') {
                display.textContent = '';
            }

            display.textContent += buttonText;
        }

    });
});

clear.addEventListener('click', () => {
    display.textContent = '0';
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    };
});

equal.addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent);
        justCalculated = true;
    } catch (error) {
        display.textContent = 'Error';
        justCalculated = true;
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    button.forEach((btn) => {
        if (btn.textContent === key) {
            btn.click();
        };
    });
});