const choices = ["rock", "paper", "scissors"];
const winners = [];

//play the game

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play new game";
  logWins();
}

//play 5 rounds

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization does not matter."
    );
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLocaleLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  //get imput from the computer
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "scissors") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player Wins").length;
  let computerWins = winners.filter((item) => item == "Computer Wins").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Choose:", playerChoice);
  console.log("Compuetr Choose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("----------------------");
}
