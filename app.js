let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randomNum = Math.floor(Math.random() * 3)
    const computerChoice = choices[randomNum]
    return computerChoice
    
};

const playRound  = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "tie";
     }  if ( (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
     (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
         (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
         playerScore++
         return "player win!"
        
     }  if (  (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
     (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
         (computerSelection === 'PAPER' && playerSelection === 'ROCK')) {
         computerScore++
        return"computer win!" 
     }
}


 




const game = () => {
    
    for (let i = 0; i < 5; i++){
    const playerSelection = prompt('ROCK, PAPER or SCISSORS', 'vul in ').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return " you have beat the computer!"
    } else if (computerScore > playerScore) {
        return "computer has beat you!"
    } else {
        return "it was a tie!"
    }
}

console.log(game());

//console.log(computerChoice())


/* const getComputerChoice = () => {
    let randomNumberComputer = Math.floor(Math.random() * 3)
    
   

    switch (randomNumberComputer) {
        case 0:
            return "Rock"
           
        case 1:
            return "Paper"
           
        case 2:
            return "Scissors"
        
    
            
    };
   
  

};


const playerChoice = () => {
    let randomNumberPlayer = Math.floor(Math.random() * 3)
    
   

    switch (randomNumberPlayer) {
        case 0:
            return "ROCK"
           
        case 1:
            return "PAPER"
           
        case 2:
            return "SCISSORS"
        
    
    };

    

};

let playerSelection = playerChoice;
let computerSelection = getComputerChoice;








 */