const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function randomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return randomChoice(choices);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "It's a tie!";
    if (beats[playerSelection] === computerSelection) return `${playerSelection} beats ${computerSelection}, player wins! Congrats!`;
    return `${computerSelection} beats ${playerSelection}, computer wins! Sorry not sorry!`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    while (playerScore < 3 && computerScore < 3) {
        console.log(`--- Round ${round} ---`);

        let playerSelection = prompt("What is your choice: rock, paper, or scissors?").toLowerCase().trim();
        const validChoices = ["rock", "paper", "scissors"];

        if (!validChoices.includes(playerSelection)) {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            continue;
        }

        let computerSelection = computerPlay();
        console.log("Player selected: " + playerSelection);
        console.log("Computer selected: " + computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith(playerSelection)) {
            playerScore++;
        } else if (result.startsWith(computerSelection)) {
            computerScore++;
        }

        console.log(`Score — Player: ${playerScore}, Computer: ${computerScore}`);
        round++;
    }

    if (playerScore > computerScore) {
        console.log("🎉 You win the game!");
    } else {
        console.log("💻 Computer wins the game!");
    }
}

game();