document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");

    function appendToDisplay(input){
        display.value += input;
    }

    function clearDisplay(){
        display.value = "";
    }

    function calculate(){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
    }

    // Make functions work with HTML buttons
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;

    // Keyboard support
    document.addEventListener("keydown", function(event) {
        if (event.repeat) return;

        const key = event.key;

        // Numbers
        if (!isNaN(key)) {
            appendToDisplay(key);
        }

        // Operators
        else if (["+", "-", "*", "/"].includes(key)) {
            appendToDisplay(key);
        }

        // Decimal
        else if (key === ".") {
            appendToDisplay(".");
        }

        // Enter = calculate
        else if (key === "Enter") {
            calculate();
        }

        // Backspace = delete last
        else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
        }

        // Escape = clear
        else if (key === "Escape") {
            clearDisplay();
        }
    });

});
