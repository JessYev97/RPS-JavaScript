function greet() {
    console.log("Hello from external script!"); 
}
greet(); 
//write a function that randomly returns 'rock' 'paper' or 'scissors' 
var choice = Math.random() * 3;
if (choice <= 1) {
    choice = "option1";
} else if (choice <= 2) {
    choice = "option2";
} else {
    choice = "option3";
}
//create function named getComputerChoice 
//write the code so that getComputerChoice will randomly return one of the following
//string values: "rock" "paper" or "scissors"
//hint - the Math.random method returns a random number that's greater than or equal to 0
//and less than 1. Think about how you can use this to conditionally return one of
//the multiple choices. 