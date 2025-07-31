/* console.log("Hello, World!"); */

/* score variables */
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    /* randomly returns "rock", "paper", or "scissors" */

    /* generate random integer between 1-3 incl. */
    let randInt = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    /* assign meaning to random integer */
    switch(randInt) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}

function getHumanChoice() {
    /* returns "rock", "paper", or "scissors" based on user input */

    /* prompt user for input */
    let humanChoice = prompt("Throw rock, paper, or scissors to beat the machine! ");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    /* initialize variables for final string return */
    let winner;

    /* compare strings to see who wins the round */
    if (computerChoice == 'rock') {
        if (humanChoice == 'paper') {
            winner = 'Round won! Paper beats Rock';
            humanScore++;
        }
        else if (humanChoice == 'scissors') {
            winner = 'Round lost! Rock beats Scissors';
            computerScore++;
        }
        else {
            winner = 'Tie! Rock and Rock';
        }
    }
    else if (computerChoice == 'paper') {
        if (humanChoice == 'rock') {
            winner = 'Round lost! Paper beats Rock';
            computerScore++;
        }
        else if (humanChoice == 'scissors') {
            winner = 'Round won! Scissors beats Paper';
            humanScore++;
        }
        else {
            winner = 'Tie! Paper and Paper';
        }
    }
    else {
        if (humanChoice == 'paper') {
            winner = 'Round lost! Scissors beats Paper';
            computerScore++;
        }
        else if (humanChoice == 'rock') {
            winner = 'Round won! Rock beats Scissors';
            humanScore++;
        }
        else {
            winner = 'Tie! Scissors and Scissors';
        }
    }

    console.log(winner);

}

function playGame() {
    /* call playRound() 5 times */
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    /* declare game winner and final score */
    if (humanScore > computerScore) {
        console.log ('Congratulations, you won ' + humanScore + ' to ' + computerScore);
    }
    else if (humanScore < computerScore) {
        console.log ('Bummer, you lost ' + computerScore + ' to ' + humanScore);
    }
    else {
        console.log ("It's a tie! " + humanScore + ' to ' + computerScore);
    }
}

playGame();