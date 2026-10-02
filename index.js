let randomNumber;
let attempts = 0;
let maxNumber;

const maxNumberInput = document.getElementById("maxNumber");
const startBtn = document.getElementById("startBtn");

const gameArea = document.getElementById("gameArea");
const rangeText = document.getElementById("rangeText");

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");

const message = document.getElementById("message");
const attemptCount = document.getElementById("attemptCount");

const restartBtn = document.getElementById("restartBtn");


// Start Game
startBtn.addEventListener("click", function () {

    maxNumber = Number(maxNumberInput.value);

    if (maxNumber <= 1 || isNaN(maxNumber)) {
        alert("Please enter a number greater than 1.");
        return;
    }

    randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    attempts = 0;
    attemptCount.textContent = attempts;

    rangeText.textContent = `Guess a number between 1 and ${maxNumber}`;

    message.textContent = "";

    gameArea.classList.remove("hidden");

    guessInput.value = "";
    guessInput.focus();
});


// Check Guess
function checkGuess() {

    const guess = Number(guessInput.value);

    if (guessInput.value === "") {
        message.textContent = "⚠️ Please enter a number.";
        return;
    }

    if (guess < 1 || guess > maxNumber) {
        message.textContent = `⚠️ Enter a number between 1 and ${maxNumber}.`;
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;


    // Correct Guess
    if (guess === randomNumber) {

        message.textContent =
            `🎉 Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts!`;

        guessInput.disabled = true;
        guessBtn.disabled = true;

    }

    // Guess is too small
    else if (guess < randomNumber) {

        message.textContent =
            "📈 Too low! Try a bigger number.";

    }

    // Guess is too large
    else {

        message.textContent =
            "📉 Too high! Try a smaller number.";

    }

    guessInput.value = "";
    guessInput.focus();
}


// Submit Guess
guessBtn.addEventListener("click", checkGuess);


// Press Enter to submit
guessInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkGuess();
    }

});


// Restart Game
restartBtn.addEventListener("click", function () {

    randomNumber = null;
    attempts = 0;

    maxNumberInput.value = "";
    guessInput.value = "";

    attemptCount.textContent = "0";

    message.textContent = "";

    guessInput.disabled = false;
    guessBtn.disabled = false;

    gameArea.classList.add("hidden");

    maxNumberInput.focus();
});