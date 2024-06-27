
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

function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt("Rock Paper Scissors");
    if(choice == null){
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
      validatedInput = true;
      return choiceInLower;
    }
  }
} 

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log("------------");
      if (checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer ++;
      }
      else if (checkWinner(playerSelection, computerSelection) == "Computer"){
        scoreComputer ++;
      }
    }
  console.log(" Game Over")
  if (scorePlayer > scoreComputer){
    console.log("You won the game! Congrats and play again if you want!");
  }
  else if(scorePlayer < scoreComputer){
    console.log("oof, computer won. You can try again if you'd like!");
  } else{
    console.log("It was a tie! Play again if you think you can win!"); 
  }
}
game() 