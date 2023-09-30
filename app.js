let playerScore = 0;
let compScore = 0;


const computerPlay = () => {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
    
        return "You tied!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++
        return "You Lose!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You won!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++
        return "You Lose!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++
        return "You Lose!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You Win!"
    }
}




const game = () => {
    
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Chose ROCK PAPER OR SCISSORS", "vul in").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > compScore) {
        return "You beat the computer!"
    } else if (compScore > playerScore) {
        return " you lose sorry!"
    } else {
        return "it was a tie!"
    }
}

console.log(game());