
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
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"; 
    } 
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}
function playRound(playerSelection, computerSelection){ 
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
      return "It's a tie!"
  }
  else if(result == "Player"){
      return `You win! ${playerSelection} beats ${computerSelection}`
  }
  else{
      return `You lose! ${computerSelection} beats ${playerSelection}`
  }
}

