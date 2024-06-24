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
//next it's time for getHumanChoice. it should return a value of "rock" "paper" or "scissors"
function getHumanChoice() {
   let humanInput = prompt("enter 'rock', 'paper' or 'scissors'"); 
   
 }
 
