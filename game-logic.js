//write a function that randomly returns 'rock' 'paper' or 'scissors' 
function getComputerChoice() {
let choice = Math.floor(Math.random()  * 3);
if (choice === 0) { 
    return 'rock';
} else if (choice === 1) {
    return 'paper';
} else {
    return 'scissors';
}
}
console.log(getComputerChoice()); 

//create function named getComputerChoice 
//write the code so that getComputerChoice will randomly return one of the following
//string values: "rock" "paper" or "scissors" 
//hint - the Math.random method returns a random number that's greater than or equal to 0
//and less than 1. Think about how you can use this to conditionally return one of
//the multiple choices. 

//create new function named getHumanChoice 
//write the code so that getHumanChoice will return one of the valid choices depending on
//what the user inputs.
//Hint: use the prompt method to get the user's input.
//test what your function returns by using console.log

function getHumanChoice() {
    let userInput = prompt("enter rock, paper, or scissors:");
    return userInput;
}
window.onload = function() {
    console.log(getHumanChoice());
}
//Declare the players score variables:
//your game will keep track of the players score. You will write variables
//to keep track of the players score.

//create two new variables named humanScore and computerScore in the global scope
//initialize those variables with the value of 0. 
let humanScore = 0;
let computerScore = 0;

//create new function named playRound.

//define two parameters for playRound: humanChoice and computerChoice. Use these two 
//parameters to to take the human and computer choices as arguments 

//make your functions human choice parameter case-insinsitive so that players can
// input variations of "rock" "ROck" etc. 

//write the code for your playRound function to console.log a string value representing the 
// round winner, such as "You lose! Paper beats Rock!".
//increment the humanScore or computerScore variable based on the round winner. 

function playRound(humanChoice, computerChoice) {
    // your code here!
    console.log(humanChoice.toLowerCase());
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  