document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");

    function appendToDisplay(input){
        display.value = display.value + input; // force append
    }

    function clearDisplay(){
        display.value = "";
    }

    function calculate(){
        try{
            display.value = String(eval(display.value)); // ensure string
        }
        catch{
            display.value = "Error";
        }
    }

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;

    // Keyboard support
    document.addEventListener("keydown", function(event) {

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
            event.preventDefault(); // 🔥 IMPORTANT FIX
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
