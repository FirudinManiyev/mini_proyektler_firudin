const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        switch (value) {

            case "C":
                expression = "";
                break;

            case "⌫":
                expression = expression.slice(0, -1);
                break;

            case "=":
                calculate();
                return;

            case "×":
                expression += "*";
                break;

            case "÷":
                expression += "/";
                break;

            default:
                expression += value;
        }

        updateDisplay();

    });

});

function updateDisplay() {

    display.value = expression
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

}

function calculate() {

    if (!expression) return;

    try {

        const result = Function(`"use strict"; return (${expression})`)();

        expression = result.toString();

    } catch {

        expression = "";
        display.value = "Error";

        setTimeout(() => {

            display.value = "";

        }, 1200);

        return;

    }

    updateDisplay();

}

// ======================
// Keyboard Support
// ======================

document.addEventListener("keydown", (e) => {

    const key = e.key;

    if ("0123456789+-*/().".includes(key)) {

        expression += key;
        updateDisplay();
        return;

    }

    if (key === "Enter") {

        e.preventDefault();
        calculate();
        return;

    }

    if (key === "Backspace") {

        expression = expression.slice(0, -1);
        updateDisplay();
        return;

    }

    if (key === "Delete") {

        expression = "";
        updateDisplay();

    }

});