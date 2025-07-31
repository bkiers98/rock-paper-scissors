/* console.log("Hello, World!"); */

function getComputerChoice(){
    /* randomly returns "rock", "paper", or "scissors" */

    /* generate random integer between 1-3 incl. */
    let randInt = Math.floor(Math.random() * 3) + 1;

    /* assign meaning to random integer 
    1 = 'rock', 2 = 'paper', 3 = 'scissors' */

    return randInt;
}

function getHumanChoice(){
    /* returns "rock", "paper", or "scissors" based on user input */

    /* prompt user for input */
    let str1 = prompt("Throw rock, paper, or scissors to beat the machine! ");
    let humanChoice;

    /* assign meaning to user input */
    switch(str1) {
        case 'rock':
            humanChoice = 1;
            break;
        case 'paper':
            humanChoice = 2;
            break;
        case 'scissors':
            humanChoice = 3;
            break;
        default:
            return("Not a valid choice!");
    }

    return humanChoice;
}


console.log(getHumanChoice());