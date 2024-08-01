let result = document.getElementById("result");
document.body.appendChild(result);
let scorePlayer = document.getElementById("yourScore");
document.body.appendChild(yourScore);
let scoreComputer = document.getElementById("compScore");
document.body.appendChild(compScore); 

const options = ["rock", "paper", "scissors"];
  scorePlayer = 0;
  scoreComputer = 0; 
 let rounds = 0;

 function getComputerChoice() {
    const choice = options [Math.floor(Math.random()  * options.length)];
    return choice;     
}
 let computerSelection = getComputerChoice(); 
 
 function checkWinner(playerSelection, computerSelection){
  rounds++; 
  console.log(rounds); 
  if (playerSelection === computerSelection){
      return "Tie"; 
  } 
  else if(
      (playerSelection === "rock" && computerSelection === "scissors") || 
  (playerSelection === "scissors" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "rock")
  ){
      return "Player";
  }else {
      return "Computer";
      
  }
}
function playRound(playerSelection, computerSelection){ 
  
  if (rounds === 5) {
    if (scorePlayer > scoreComputer) {
     return "You win the game!";
    } else if (scorePlayer < scoreComputer) {
     return "Computer wins the game";
    } else {
      return "no winner for the game"; 
    }
  }
  const result = checkWinner(playerSelection, computerSelection);
  if(result === "Player"){
  scorePlayer++;
  document.getElementById("yourScore").innerText = `Player score: ${scorePlayer}`;
  }
  else if (result === "Computer"){
    scoreComputer++; 
    document.getElementById("compScore").innerText = `Computer score: ${scoreComputer}`;  
  }
  if (rounds === 5) {
    // Disable the buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
  return result; 
  
}

const rockButton = document.getElementById("Rock");
rockButton.addEventListener("click", function(){
  const playerSelection = "rock";
   const computerSelection = getComputerChoice(); 
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result;
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection}`;
  document.getElementById("computerSelection").textContent =`computer chose ${computerSelection}`; 
});
const paperButton = document.getElementById("Paper");
paperButton.addEventListener("click", function(){
  const playerSelection = "paper";
   const computerSelection = getComputerChoice(); 
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result;
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection}` 
  document.getElementById("computerSelection").textContent =`computer chose ${computerSelection}`; 
}); 
const scissorsButton = document.getElementById("Scissors");
scissorsButton.addEventListener("click", function(){
  const playerSelection = "scissors"; 
  const computerSelection = getComputerChoice(); 
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result;
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection}`;
  document.getElementById("computerSelection").textContent =`computer chose ${computerSelection}`; 
});

const resetBtn = document.getElementById("resetGame");
resetBtn.addEventListener("click", function(){
  scorePlayer = 0;
  scoreComputer = 0;
  rounds = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("playerSelection").textContent = "";
  document.getElementById("computerSelection").textContent = ""; 
  document.getElementById("yourScore").textContent = "Player score:";
  document.getElementById("compScore").textContent = "Computer score:"; 

rockButton.disabled = false;
paperButton.disabled = false;
scissorsButton.disabled = false;
})