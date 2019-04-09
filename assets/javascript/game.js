// VARIABLES
// ==========================================================================

// The array of words.
var randomWordArr = ["madonna", "queen", "prince", "eurythmics", "aerosmith", "journey", "blondie", "foreigner", "eagles", "genesis", "metallica", "inxs", "heart", "toto", "pretenders", "chicago", "sting", "scorpions", "abba", "whitesnake", "poison", "survivor", "yes", "bananarama", "rush"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
console.log(randomWord);
//randomWord is the word to guess

//declaring a variable
var wins = 0;
var numGuesses = 10;
var letters = []; //characters that user has to input

//to store the guesses
var userGuess = [];

//Display the selected word to guess but masked by "_"
var dash = []; //underscore
var correctGuess = []; //once all underscore are guessed
var selectedWord = ""; //word with all underscores displayed
var userWon = false;

for (var i = 0; i < randomWord.length; i++) { //counts the no. of characters in the randomWord
    selectedWord = selectedWord + " _";
    dash.push(randomWord[i]);
}

//underscore has consumed
document.getElementById("selectedwordid").innerHTML = selectedWord; //displays all underscores

//FUNCTION
setInterval(blinktext, 500);
var txt = "";
var count = 0;
function blinktext() {
    var cntrl = document.getElementById("txtblinkingtext");
    if (!!cntrl) {
        if (count == 0)
            txt = cntrl.value;
        if (count % 2 == 0)
            cntrl.value = "";
        else
            cntrl.value = txt;
        count++;
    }
}

//RESET Button
function playAgain() {
    randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    console.log(randomWord);
    numGuesses = 10;
    letters = [];
    userGuess = [];
    dash = [];
    correctGuess = [];
    selectedWord = "";
    userWon = false;

    for (var i = 0; i < randomWord.length; i++) {
        selectedWord = selectedWord + " _";
        dash.push(randomWord[i]);
    }
    //underscore has consumed
    document.getElementById("selectedwordid").innerHTML = selectedWord;
    document.getElementById("numguessesid").innerHTML = "" + 10;
    document.getElementById("typed").innerHTML = 0;
    document.getElementById("scorewinid").innerHTML = 0;
}


// MAIN PROCESS
// ==============================================================================

//when user presses a letter
document.onkeydown = function (event) {
    var myWord = "";
    var indexWord = -1;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var isAlpha = (/^[a-zA-Z]+$/).test(userGuess);
    //console.log("isAlpha=====>" + isAlpha + "<=======");

    //checks if 0 guesses then reveal final answer
    if (numGuesses === 0) {
        alert("End Game. Press 'RESET' to play again.");
        document.getElementById("selectedwordid").innerHTML = randomWord;
        return;
    }

    //if inputted character is alpha then display as guesses letter
    if (isAlpha) {
        //alert("It is alpha");
        //alert(userGuess + " is here");
        letters.push(userGuess);
        document.getElementById("typed").innerHTML = letters.join(', ');
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
                //console.log("=====>" + myWord + "<=======");
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

    document.getElementById("selectedwordid").innerHTML = selectedWord;

    var guessDisplayString = document.getElementById("selectedwordid").innerHTML;

    if (correctGuess !== undefined && correctGuess.length > 0) {
        if (numGuesses >= 0 && randomWord.length === correctGuess.length) {

            for (var i = 0; i < randomWord.length; i++) {
                if (correctGuess[i] !== undefined && correctGuess[i] === guessDisplayString[i] && randomWord[i] === guessDisplayString[i]) {
                    if (i === (randomWord.length - 1)) {
                        userWon = true;
                    }
                }
            }
            if (userWon) {
                document.getElementById("scorewinid").innerHTML = 1;
                document.getElementById("numguessesid").innerHTML = numGuesses;
            }
        }
    }

    document.getElementById("selectedwordid").innerHTML = selectedWord;
}
