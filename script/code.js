document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");
    const backspace = document.getElementById("backspace"); // Backspace button

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "C") {
                display.value = ""; // Clear the display
            } else if (value === "=") {
                try {
                    display.value = eval(display.value.replace("÷", "/").replace("x", "*"));
                } catch {
                    display.value = "Error"; // Handle invalid input
                }
            } else if (value !== "⌫") { 
                display.value += value;
            }
        });
    });

    // ✅ Corrected Backspace Functionality
    backspace.addEventListener("click", function () {
        display.value = display.value.slice(0, -1); // Remove last character
    });
});
