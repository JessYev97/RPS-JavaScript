//write a function that randomly returns 'rock' 'paper' or 'scissors' 
function getComputerChoice() {
var choice = Math.floor(Math.random()  * 3);
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
    var userInput = prompt("enter rock, paper, or scissors:");
    return userInput;
}
window.onload = function() {
    console.log(getHumanChoice());
}