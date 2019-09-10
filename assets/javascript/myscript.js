// console.log("Welcome to word guess. Can you beat me and guess what word I am thinking of?!");
// console.log("I'll give you one hint the words are Super Hero based. GLHF!");


var words = ["batman", "superman", "wonderwoman", "flash", "spiderman", "ironman", "captain america", "hulk"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess = [];
var lettersGuessed = [];

window.onload = function(){
    var compGuess= this.words[this.Math.floor(Math.random()*this.words.length)];
    computerGuess.push(compGuess);
    console.log(this.computerGuess[0]);
}

document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);

    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = words[Math.floor(Math.random() * words.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
        
    }
    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
    }
    
    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    
var html = "<p> Current Word :  </p>"+
"<p> Use letters to guess what word I am thinking of </p>"+
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses left: " + guessesLeft + "</p>" +
"<p>Your guesses so far: " + lettersGuessed + "</p>";



      document.querySelector(".header2").innerHTML = html;

}
