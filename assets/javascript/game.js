// VARIABLES
// ==========================================================================

// The array of words.
var randomWordArr = ["madonna", "Journey", "Aerosmith"];

var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
console.log(randomWord);

var wins = 0;
var numGuesses = 10;

//to store the guesses
var userGuess = [];
var dash = [];
for (var i = 0; i < randomWord.length; i++) {
    dash.push("-");
}
console.log(dash);


// FUNCTIONS
// ==============================================================================

// fill up answer with array with under scores
function startUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }
    //put in string
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var isAlpha = (/^[a-zA-Z]+$/).test(userGuess);

    for (var i = 0; i < randomWord.length; i++) {
        if (event.key === randomWord[i]) {
            console.log(randomWord[i]);
            dash[i] = randomWord[i];
        }
    }
}