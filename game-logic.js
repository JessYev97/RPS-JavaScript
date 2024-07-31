const rockButton = document.getElementById("Rock");
document.body.appendChild(rockButton); 


const paperButton = document.getElementById("Paper");
document.body.appendChild(paperButton);


const scissorsButton = document.getElementById("Scissors");
document.body.appendChild(scissorsButton); 

let result = document.getElementById("result");
document.body.appendChild(result);
let scorePlayer = document.getElementById("yourScore");
document.body.appendChild(yourScore);
let scoreComputer = document.getElementById("compScore");
document.body.appendChild(compScore); 


 scorePlayer = 0;
 scoreComputer = 0; 
 


const options = ["rock", "paper", "scissors"];

 function getComputerChoice() {
    const choice = options [Math.floor(Math.random()  * options.length)];
    return choice;     
    //do I put a DOM method here too? seems it's working 
}

 const computerSelection = getComputerChoice(); 
 
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
   result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
      //not even sure if the following line should be here 
      document.getElementById("result").textContent= "It's a tie";
      return "It's a tie!";
  }
  else if(result == "Player"){
    /*let newScore = parseInt(document.getElementById("yourScore").innerHTML);
  scorePlayer = newScore +1;
 document.getElementById("yourScore").innerHTML = newScore; */
  scorePlayer = scorePlayer +1;
  document.getElementById("yourScore").innerText = scorePlayer;
      return `You win! ${playerSelection} beats ${computerSelection}`; 
      
  }
  else{
    scoreComputer = scoreComputer +1; 
    document.getElementById("compScore").innerText = scoreComputer;
      return `You lose! ${computerSelection} beats ${playerSelection}`; 
      
  }
}


function game(){
   scorePlayer = 0;
   scoreComputer = 0; 
    {
     
    const result = playRound(playerSelection, computerSelection); 
    result.textContent = result; 
    if (checkWinner(playerSelection, computerSelection) == "Player"){
      //scorePlayer ++;
      getElementById("yourScore") ++; 
      
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer"){
      //scoreComputer ++;
      getElementById("compScore") ++; 
      
    }
     // displayGameResult(result); 
  } 
} 

rockButton.addEventListener("click", function(){
  const playerSelection = "rock";
  //playRound(playerSelection, computerSelection);
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result;
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection}` 
  document.getElementById("computerSelection").textContent =`computer chose ${computerSelection}`; 
  //game();
  console.log("Result:", result);
  /*if (result.includes("Player")) {
    scorePlayer++; 
  } else if (result.includes("Computer")) {
    scoreComputer++; 
  }
  document.getElementById("yourScore").textContent= `Your score: ${scorePlayer}`;
  document.getElementById("compScore").textContent= `Computer score: ${scoreComputer}`;
  //eListener(); */
  //game(); 
  
});