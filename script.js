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
    if (beats[playerSelection] === computerSelection) return `${playerSelection} beats ${computerSelection}, player wins! Congrats! 🏆`;
    return `${computerSelection} beats ${playerSelection}, computer wins! Sorry not sorry! 🏆`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    let lastResultMessage = "";

    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt(`${lastResultMessage}--- Round ${round} ---\nScore — Player: ${playerScore}, Computer: ${computerScore}\n\nWhat is your choice: rock, paper, or scissors?`).toLowerCase().trim();
        const validChoices = ["rock", "paper", "scissors"];

        if (!validChoices.includes(playerSelection)) {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
            continue;
        }

        let computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);

        if (result.startsWith(playerSelection)) {
            playerScore++;
        } else if (result.startsWith(computerSelection)) {
            computerScore++;
        }

        lastResultMessage = `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n${result}\n\n`;
        round++;
    }

     if (playerScore > computerScore) {
        alert(`🎉 You win the game! Final score — Player: ${playerScore}, Computer: ${computerScore}`);
    } else {
        alert(`💻 Computer wins the game! Final score — Player: ${playerScore}, Computer: ${computerScore}`);
    }
}

alert("Rock ✊, Paper 📄, Scissors ✂️ \n\n🏆 First to win 3 rounds wins the game.\nType \"rock\", \"paper\", or \"scissors\" when prompted.");

const startGame = confirm("👉 Click OK to start the game. \n\nGood luck!");

if (startGame) {
    game();
} else {
    alert("👋 Game cancelled.");
}