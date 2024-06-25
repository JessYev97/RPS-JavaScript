
//let humanScore = 0;
//let computerScore = 0;
//const humanSelection = getHumanChoice();
 //const computerSelection = getComputerChoice();
 //after some research I found a better way to declare the choices above:
const options = ["rock", "paper", "scissors"];
 //playRound(humanSelection, computerSelection); (commenting this out temporarily)
//write a function that randomly returns 'rock' 'paper' or 'scissors' 
function getComputerChoice() {
    //here I now need to tie in the new options const defined above:
    const choice = options [Math.floor(Math.random()  * options.length)];
    //above I changed the code; before it was * 3; this worked but this method's more intuitive
    return choice; 
}
getComputerChoice();
//here I was on the right track but since I have changed the code to options above I'll 
//comment the below code out.
//if (randomNum === 0) { 
  //  return 'rock';
//} else if (randomNum === 1) {
  //  return 'paper';
//} else {
  //  return 'scissors';
//}
//}
//console.log(getComputerChoice()); 
//getHumanChoice should return a value of "rock" "paper" or "scissors"
//function getHumanChoice() {
  // const humanInput = prompt("enter 'rock', 'paper' or 'scissors'"); 
   //return humanInput.toLowerCase();
  // it worked! wooo! happy times. Okay, commit then moving on. 
//}
//initializing variables to 0 for humanScore and computerScore to keep track
//of the players score (in the global scope)
//function playRound(humanInput, computerChoice) {
   // your code here! - thinking.
  // humanInput = humanSelection;
   //computerChoice = computerSelection; 
   //the above code is to give arguments to playRound from the global scope.
   //if (humanInput === 'rock' && computerChoice === 'scissors') {
   // return "You win!";
   //} else {
    //return "not a win, try again!";
   //}
 //}
 //console.log(playRound(humanInput, computerSelection)); 
 //starting with the win arguments; logging one string for all human win scenarios

 

 

