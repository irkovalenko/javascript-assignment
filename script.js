const beats = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const choices = ["rock", "paper", "scissors"];

function randomChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function computerPlay() {
  return randomChoice(choices);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      message: "It's a tie!",
      winner: "nobody",
    };
  }

  if (beats[playerSelection] === computerSelection) {
    return {
      message: `${playerSelection} beats ${computerSelection}, player wins! Congrats! 🏆`,
      winner: "player",
    };
  }

  return {
    message: `${computerSelection} beats ${playerSelection}, computer wins! Sorry not sorry! 🏆`,
    winner: "computer",
  };
}

function getPlayerChoice(lastResultMessage, round, playerScore, computerScore) {
  while (true) {
    const rawInput = prompt(
      `${lastResultMessage}` +
        `--- Round ${round} ---\n` +
        `Score — Player: ${playerScore}, Computer: ${computerScore}\n\n` +
        `What is your choice: rock, paper, or scissors?`,
    );

    if (rawInput === null) {
      cancelGame();
    }

    const playerSelection = rawInput.toLowerCase().trim();

    if (choices.includes(playerSelection)) {
      return playerSelection;
    }

    alert("Invalid choice. Please enter rock, paper, or scissors.");
  }
}

function announceWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert(
      `🎉 You win the game!\n\n` +
        `Final score — Player: ${playerScore}, Computer: ${computerScore}`
    );
  } else {
    alert(
      `💻 Computer wins the game!\n\n` +
        `Final score — Player: ${playerScore}, Computer: ${computerScore}`,
    );
  }
}

function askToPlayAgain() {
  return confirm("🔁 Play again?");
}

function cancelGame() {
  alert("👋 Game cancelled. Bye!");
  return;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  let lastResultMessage = "";

  while (playerScore < 3 && computerScore < 3) {
    const playerSelection = getPlayerChoice(
      lastResultMessage,
      round,
      playerScore,
      computerScore,
    );
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result.winner === "player") {
      playerScore++;
    } else if (result.winner === "computer") {
      computerScore++;
    }

    lastResultMessage =
      `You chose: ${playerSelection}\n` +
      `Computer chose: ${computerSelection}\n` +
      `${result.message}\n\n`;

    round++;
  }

  announceWinner(playerScore, computerScore);

  if (askToPlayAgain()) {
    game();
  } else {
    alert("👋 Thanks for playing! Bye!");
  }
}

alert(
  "Rock ✊, Paper 📄, Scissors ✂️\n\n" +
    "🏆 First to win 3 rounds wins the game.\n" +
    'Type "rock", "paper", or "scissors" when prompted.',
);

const startGame = confirm("👉 Click OK to start the game.\n\nGood luck!");

if (startGame) {
  game();
} else {
  cancelGame();
}
