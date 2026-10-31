// Generate a random secret number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Count the attempts
let attempts = 0;

// Connect JavaScript to HTML elements
const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const playAgainButton = document.getElementById("playAgainButton");

// Check the player's guess
submitButton.addEventListener("click", function() {

    const guess = Number(guessInput.value);

    // Validate the input
    if (
        guessInput.value === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        message.textContent = "Enter a whole number between 1 and 100.";
        return;
    }

    // Increase the attempt counter
    attempts++;
    attemptsDisplay.textContent = attempts;

    // Compare the guess with the secret number
    if (guess > secretNumber) {
        message.textContent = "Your guess is too high!";
    }
    else if (guess < secretNumber) {
        message.textContent = "Your guess is too low!";
    }
    else {
        message.textContent = "Congratulations! You guessed correctly!";
        submitButton.disabled = true;
    }
});

// Start a new game
playAgainButton.addEventListener("click", function() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;
    attemptsDisplay.textContent = attempts;

    message.textContent = "A new game has started!";

    guessInput.value = "";
    submitButton.disabled = false;
});
