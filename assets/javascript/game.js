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
//when user presses enter to start
document.keypress = function (e) {
    console.log("Enter is pressed");
};




//when user presses a letter
document.onkeydown = function (event) {
    var userGuess = String.fromCharCode(event).toLowerCase();
    var isAlpha = (/^[a-zA-Z]+$/).test(userGuess);
    console.log(userGuess);

    if (userGuess != isAlpha) {

    };

    if (userGuess === isAlpha) {
        for (var i = 0; i < randomWord.length; i++) {
            if (event.key === randomWord[i]) {
                dash[i] = randomWord[i];
                numGuesses--;
                userGuess.push(letters);
            }
        }
    }


}