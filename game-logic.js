
const rockButton = document.getElementById("Rock");
document.body.appendChild(rockButton); 


const paperButton = document.getElementById("Paper");
document.body.appendChild(paperButton);


const scissorsButton = document.getElementById("Scissors");
document.body.appendChild(scissorsButton); 

const buttons = document.getElementById("buttons");
document.body.appendChild(buttons); 


const playerSelection = buttons;
let computerSelection; 

const options = ["rock", "paper", "scissors"];

 function getComputerChoice() {
    const choice = options [Math.floor(Math.random()  * options.length)];
    return choice; 

    
}

computerSelection = getComputerChoice(); 

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

rockButton.addEventListener("click", function(){
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  //console.log(playRound()); 
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result;
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection} computer chose ${computerSelection}`; 
});

paperButton.addEventListener("click", function(){
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection); 
  //console.log(playRound());
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result;
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;
});


scissorsButton.addEventListener("click", function(){
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);  
  //console.log(playRound());
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = result; 
  document.getElementById("playerSelection").textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;  
});



// function getPlayerChoice(){
  //let validatedInput = false;
  //while(validatedInput == false){
    //const choice = prompt("Rock Paper Scissors");
    //if(choice == null){
      //continue; 
    //} 
    //const choiceInLower = choice.toLowerCase();
    //if(options.includes(choiceInLower)){
      //validatedInput = true;
      //return choiceInLower;
    //}
  //}
//} 

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    
    //for (let i = 0; i < 5; i++) 
      {
       
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection); 
      result.textContent = result; 
      
      console.log(playRound(playerSelection, computerSelection));

     // console.log("------------");
      if (checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer ++;
      }
      else if (checkWinner(playerSelection, computerSelection) == "Computer"){
        scoreComputer ++;
      }
    } 
  console.log(" Game Over")
  if (scorePlayer > scoreComputer){
    console.log("You won the game! Congrats and play again");
  }
  else if(scorePlayer < scoreComputer){
    console.log("oof, computer won. You can try again");
  } else{
    console.log("It was a tie! Play again"); 
  }
}
game() 
/*
//buttons.addEventListener("click", )

const rockButton = document.getElementById("Rock");
document.body.appendChild(rockButton); 
rockButton.addEventListener("click", function(){
  playRound("rock");
  console.log(result);
});

const paperButton = document.getElementById("Paper");
document.body.appendChild(paperButton);
paperButton.addEventListener("click", function() {
  playRound("paper"); 
});

const scissorsButton = document.getElementById("Scissors");
document.body.appendChild(scissorsButton); 
scissorsButton.addEventListener("click", function() {
  playRound("scissors");  
});


paperButton.addEventListener("click", playRound);  
scissorsButton.addEventListener("click", () => playRound("Scissors"));  

*/ 