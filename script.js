let keywordContainer = document.getElementById("keyword");

const buttons = [
    "MC", "MR", "MS", "M+", "(", ")", "C", "/", "7", "8", "9", "*",
    "4", "5", "6", "-", "1", "2", "3", "+", "0", "00", ".", "="
];

buttons.forEach((text, index) => {
    const button = document.createElement("div");
    button.id = `${index + 1}b`;
    button.innerText = text;

    button.addEventListener("click", function () {
        handleButtonClick(this.innerText);
    });

    keywordContainer.appendChild(button);
});


let display = document.querySelector("#display");
let currentInput = "";


function handleButtonClick(value) {
    if (value === "C") {
        currentInput = "";
    }
    else if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
        }
        catch (e) {
            currentInput = "Error";
        }
    }
    else {
        currentInput += value;
    }


    display.innerText = currentInput;
}


