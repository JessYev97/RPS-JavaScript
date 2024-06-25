
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
 
 playRound(humanSelection, computerSelection);

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
//next it's time for getHumanChoice. it should return a value of "rock" "paper" or "scissor s"
function getHumanChoice() {
   let humanInput = prompt("enter 'rock', 'paper' or 'scissors'"); 
   console.log(humanInput) 
   //it worked! wooo! happy times. Okay, commit then moving on. 
}
//initializing variables to 0 for humanScore and computerScore to keep track
//of the players score (in the global scope)
//moving on to playRound. The Odin Project gives us some example code here:
function playRound(humanChoice, computerChoice) {
   // your code here! - thinking.
   humanChoice = humanSelection;
   computerChoice = computerSelection; 
   //the above code is to give arguments to playRound from the global scope. May need
   //to revisit this. So far it is working. I am thinking about the round arguments now. 
   
 }
 
 //starting with the win arguments; logging one string for all human win scenarios

 

 
