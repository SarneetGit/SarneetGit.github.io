//List of Words (More to come haha)
var words = ["Raptors", "Pineapple", "Drake", "Javascript", "Crocodile", "Pikachu", "Labrador", "California", "Instagram", "Tranquility"]
        
//List to hold my guessess
var guesses = []

//Starting Guesses
var guessesCount = 7

//Starting wrong guesses
var badGuessess = 0

//Starting image counter
var imgCounter = -1

//Set Game On
var isGameon = true

//Randomly select word for current game
function getWord() {
    var wordIndex = Math.floor(Math.random() * 10);
    var word = words[wordIndex]
    return word
}

//Choose word for game
var globalWord = getWord()

//Break the word into a List
function getList() {
    aList = globalWord.toLowerCase().split("")
    return aList
}

//Assign to global list
var globalList = getList()

//Create Starting List that is the length of the word * _
function startingWord() {
    var str = (" _ ")
    var anotherList = []
    globalList.forEach(function(){
        anotherList.push(str)
    })
    var stringDisplay = ""
    anotherList.forEach(function(item){
        stringDisplay += item
    })
    document.querySelector("#applyGuess").innerHTML = stringDisplay
    return anotherList
}

//Assign list to variable
var globalHiddenlist = startingWord()      

//Once player looses, display the word
function endWord() {
    var stringDisplay = ""
    globalList.forEach(function(item){
        stringDisplay += item
        document.querySelector("#applyGuess").innerHTML = stringDisplay.toUpperCase()
        document.querySelector("#endWord").innerHTML = "Word Was:"
    })
}

//Update the board to reflect the number of letters in the word to be guessed
function applyGuess(char) {
    for (var i = 0;i < globalList.length; i++) {
        if (globalList[i] == char.key) {
        globalHiddenlist[i] = char.key.toUpperCase()
        var stringDisplay = ""
        globalHiddenlist.forEach(function(item){
            stringDisplay += item
        })
        document.querySelector("#applyGuess").innerHTML = stringDisplay
        }
    }
}        

//Create a string that contains all the guesses with a space denomination
function getGuesses() {
    var string = ""
    for (var i = 0; i < guesses.length; i++) {
        if (guesses[i].length > 0) {
            string = string + guesses[i] + " "
        }
    }
    return string
}

//Calculate guessess remaining and update element
function guessesRemaining() {
    guessesCount = 7 - badGuessess
    imgCounter += 1
    document.querySelector("#guessesRemaining").innerHTML = "You have " + guessesCount + " remaining.";
    document.getElementById("img").src = "./assets/images/Hangman-" + imgCounter + ".png" ;
}

//Check if player has won or lost
function checkWin() {
    if (globalHiddenlist.indexOf(" _ ") < 0 && guessesCount > 0) {
        document.querySelector("#gameStatus").innerHTML = "YOU WON!"
        isGameon = false
    }
    else if (guessesCount == 0) {
        document.querySelector("#gameStatus").textContent = "You Lost, hold this L"
        //document.getElementById("imgL").src = "./assets/images/L.jpg"
        endWord()
        isGameon = false
    }
}

//If player has lost prompt them to play again
function playAgain () {
    var yesno = prompt("Would you like to play again: Yes/No Y/N")
    if (yesno.toLowerCase() === "yes" || yesno.toLowerCase() === "y") {
        location.reload(true);
    }
}

//Check if guesss is in guesses list
function guessExist(char) {
    if (guesses.indexOf(char.key) < 0){
        return true
    }
}


//MAIN PROCESSING CODE
    document.onkeyup = function (char) {
        if (isGameon && char.keyCode >= 65 && char.keyCode <= 90) {   
            applyGuess(char)
            if (guessExist(char)) {
                if (guessExist(char) && globalList.indexOf(char.key) < 0) {
                    badGuessess ++
                    guessesRemaining()
                }
                guesses.push(char.key)
                document.querySelector("#gameStatus").innerHTML = "Game is LIVE. Good Luck!"
                document.querySelector("#guesses").innerHTML = getGuesses()
                checkWin()
                }                    
            else {
                window.alert("Kindly select a character that has not been selected ...")
            }
        }
        else if (isGameon === false) {
            playAgain()
        }
    }