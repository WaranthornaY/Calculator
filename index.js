document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");

    function appendToDisplay(input){
        display.value += input; // always append ✅
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

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;

    // Keyboard support
    document.addEventListener("keydown", function(event) {
        if (event.repeat) return;

        const key = event.key;

        if (!isNaN(key)) {
            appendToDisplay(key);
        }
        else if (["+", "-", "*", "/"].includes(key)) {
            appendToDisplay(key);
        }
        else if (key === ".") {
            appendToDisplay(".");
        }
        else if (key === "Enter") {
            calculate();
        }
        else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
        }
        else if (key === "Escape") {
            clearDisplay();
        }
    });

});
