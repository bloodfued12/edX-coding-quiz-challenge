// Grab the relevant id values so that they can be accessed throughout the algorithm

var timerElement = document.querySelector("time");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

// variables that have been noted for use in the algorithm
var timer;
var timerCount;
var correctAns = 0;
var isWin = false;
var winCounter = 0;
var loseCounter = 0;

function startGame() {
    isWin = false;
    timerCount = 90;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
}
// Start timer for the game
function startTimer() {
    // sets the timer for the game
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}
// The winGame function is called when the win condition is met
function winGame() {
    endScreen.textContent = "YOU WON!!!🏆 ";
    endScreen.classList.remove("hide");
    winCounter++
    startButton.disabled = false;
    setWins()
}
// The loseGame function is called when timer reaches 0
function loseGame() {
    wordBlank.textContent = "GAME OVER!";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}
// Causes the game to start after the button element is clicked
startButton.addEventListener("click", startGame());