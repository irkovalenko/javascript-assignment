const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const choices = ["rock", "paper", "scissors"];

let tabWasChanged = false;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        tabWasChanged = true;
    }
});

function randomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function computerPlay() {
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
        let rawInput = prompt(`${lastResultMessage}--- Round ${round} ---\nScore — Player: ${playerScore}, Computer: ${computerScore}\n\nWhat is your choice: rock, paper, or scissors?`);

        if (rawInput === null) {
            if (tabWasChanged) {
                tabWasChanged = false;
                alert("👋 Welcome back! Let's continue.");
            }
            continue;
        }

        let playerSelection = rawInput.toLowerCase().trim();

        if (!choices.includes(playerSelection)) {
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

    let playAgain = confirm("🔁 Play again?");

    if (!playAgain && tabWasChanged) {
        tabWasChanged = false;
        alert("👋 Welcome back! Let's ask that again...");
        playAgain = confirm("🔁 Play again?");
    }

    if (playAgain) {
        game();
    } else {
        alert("👋 Thanks for playing! Bye!");
    }
}

alert("Rock ✊, Paper 📄, Scissors ✂️ \n\n🏆 First to win 3 rounds wins the game.\nType \"rock\", \"paper\", or \"scissors\" when prompted.");

const startGame = confirm("👉 Click OK to start the game. \n\nGood luck!");

if (!startGame && tabWasChanged) {
    tabWasChanged = false;
    alert("👋 Welcome back! Let's ask that again...");
    const retryStart = confirm("👉 Click OK to start the game. \n\nGood luck!");
    if (retryStart) game();
} else if (startGame) {
    game();
} else {
    alert("👋 Game cancelled.");
}