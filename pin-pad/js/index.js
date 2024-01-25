let enteredPin = '';
const correctPin = '1234';

function appendPin(number) {
    if (enteredPin.length < 4) {
        enteredPin += number;
        updateDisplay();
    }
}

function clearPin() {
    enteredPin = '';
    updateDisplay();
}

function submitPin() {
    if (enteredPin === correctPin) {
        displayMessage('Correct PIN! Action initiated.');
        // Add your action here (e.g., alert, image change, text change)
    } else {
        alert('Incorrect PIN. Try again.'); // Show a pop-up
        clearPin();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = 'Enter your 4-digit PIN: ' + '●'.repeat(enteredPin.length);
}

function displayMessage(message) {
    document.getElementById('display').textContent = message;
    setTimeout(() => {
        updateDisplay();
        clearPin();
    }, 2000);
}
