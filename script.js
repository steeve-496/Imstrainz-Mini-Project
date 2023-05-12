// Get all the buttons
const buttons = document.querySelectorAll('.btn');

// Get the screen
const screen = document.getElementById('output');

// Add event listeners to all the buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the button value
        const buttonValue = button.innerHTML;

        // Handle the button value
        handleButtonValue(buttonValue);
    });
});

// Handle the button value
function handleButtonValue(buttonValue) {
    if (buttonValue === 'C') {
        // Clear the screen
        screen.innerHTML = '';
    } else if (buttonValue === '+') {
        // Add the + operator to the screen
        screen.innerHTML += '+';
    } else if (buttonValue === '-') {
        // Add the - operator to the screen
        screen.innerHTML += '-';
    } else if (buttonValue === '*') {
        // Add the * operator to the screen
        screen.innerHTML += '*';
    } else if (buttonValue === '/') {
        // Add the / operator to the screen
        screen.innerHTML += '/';
    } else if (buttonValue === '%') {
        // Add the % operator to the screen
        screen.innerHTML += '%';
    } else if (buttonValue === 'x²') {
        // Square the number on the screen
        const result = eval(screen.innerHTML + '*' + screen.innerHTML);
        screen.innerHTML = result;
    } else if (buttonValue === '=') {
        // Evaluate the expression on the screen
        const result = eval(screen.innerHTML);
        screen.innerHTML = result;
    } else {
        // Add the button value to the screen
        screen.innerHTML += buttonValue;
    }
}