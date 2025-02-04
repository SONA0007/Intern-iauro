let count = 0;

const display = document.getElementById('counter');
const inCount = document.getElementById('increment');
const deCount = document.getElementById('decrement');
const reset = document.getElementById('reset');

function updateDisplay(){
    display.textContent = count;
}

inCount.addEventListener('click', () => {
    count++;
    updateDisplay();
});

deCount.addEventListener('click', () => {
    if(count > 0)
    count--;
    updateDisplay();
});

reset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
