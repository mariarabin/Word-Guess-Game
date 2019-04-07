// VARIABLES
// ==========================================================================

// The array of words.
var randomWordArr = ["madonna", "queen", "prince", "eurythmics", "aerosmith", "journey", "blondie", "foreigner", "eagles", "genesis", "metallica", "inxs", "heart", "toto", "pretenders", "chicago", "sting", "scorpions", "abba", "whitesnake", "poison", "survivor", "yes", "bananarama", "rush"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
console.log(randomWord);

var wins = 0;
var numGuesses = 10;

//to store the guesses
var userGuess = [];

//Display the selected word to guess but masked by "_"
var dash = [];
var correctGuess = [];
var selectedWord = "";

for (var i = 0; i < randomWord.length; i++) {
    selectedWord = selectedWord + " _";
    dash.push(randomWord[i]);
}
document.getElementById("selectedwordid").innerHTML = selectedWord;


// MAIN PROCESS
// ==============================================================================

//when user presses a letter
document.onkeydown = function (event) {
    var myWord = "";
    var indexWord = -1;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var isAlpha = (/^[a-zA-Z]+$/).test(userGuess);
    //console.log("isAlpha=====>" + isAlpha + "<=======");

    //checks if alpha
    if (numGuesses === 0) {
        alert("End Game. Pls. refresh to play again.");
        document.getElementById("selectedwordid").innerHTML = randomWord;
        return;
    }

    //checks if pressed character is not alpha
    if (!isAlpha) {
        numGuesses--;
        document.getElementById("numguessesid").innerHTML = "" + numGuesses;
        return;
    }
    //checks if pressed character (userGuess) is  alpha & matches one of the letters of the randomWord(dash)
    if (isAlpha && dash.includes(userGuess)) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess && dash[i] === userGuess) {
                myWord = userGuess;
                indexWord = i;
                correctGuess[i] = myWord;
                console.log("=====>" + myWord + "<=======");
                //correctGuess[i].push(myWord);
            }
        }


        //if pressed character does not match - it subtracts from the numGuesses
    } else {
        numGuesses--;
        document.getElementById("numguessesid").innerHTML = "" + numGuesses;
    }

    //replaces - with the matched character guess
    selectedWord = "";

    for (var i = 0; i < randomWord.length; i++) {
        if (correctGuess[i] === randomWord[i]) {
            selectedWord = selectedWord + correctGuess[i];
        } else {
            selectedWord = selectedWord + " _";
        }
    }
    //if all characters are guessed correctly while numGuesses is not 0 then win =1
    console.log("correctGuess=====>" + correctGuess + "<=======");
    if (numGuesses > 0 && randomWord.length === correctGuess.length) {
        document.getElementById("scorewinid").innerHTML = 1;
    }

    document.getElementById("selectedwordid").innerHTML = selectedWord;


}