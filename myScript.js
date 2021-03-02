let computerScore = 0;
let playerScore = 0;
const compScore = document.getElementById("computerScore");
const playScore = document.getElementById("playerScore");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");

const text = document.getElementById("demo");
const result = document.getElementById("result");
const computerShowIcon = document.querySelector(".computer i");
const playerShowIcon = document.querySelector(".player i");

const randomClasses = [
  "fas fa-hand-rock",
  "fas fa-hand-paper",
  "fas fa-hand-scissors",
];
const rok = randomClasses[0];

const playGame = (e) => {
  const randomNum = Math.floor(Math.random() * randomClasses.length);
  console.log(randomNum);
  console.log(e.target.className);

  computerShowIcon.className = e.target.className;
  playerShowIcon.className = randomClasses[randomNum];

  if (computerShowIcon.className === playerShowIcon.className) {
    result.innerHTML = "It is Tie!";
    result.style.color = "orange";
    text.innerHTML = 'Try again'
  } else if (
    (playerShowIcon.className === rok &&
      computerShowIcon.className === randomClasses[2]) ||
    (playerShowIcon.className === randomClasses[1] &&
      computerShowIcon.className === randomClasses[0]) ||
    (playerShowIcon.className === randomClasses[2] &&
      computerShowIcon.className === randomClasses[1])
  ) {
    playerScore++
    playScore.innerHTML=playerScore;
    result.innerHTML = "You are a Winner!";
    text.innerHTML = 'Congratulations!'
    result.style.color = "green";
  } else if (
    (playerShowIcon.className === randomClasses[0] &&
      computerShowIcon.className === randomClasses[1]) ||
    (playerShowIcon.className === randomClasses[1] &&
      computerShowIcon.className === randomClasses[2]) ||
    (playerShowIcon.className === randomClasses[2] &&
      computerShowIcon.className === randomClasses[0])
  ) {
    computerScore++
    compScore.innerHTML = computerScore;
    result.innerHTML = "You are a Looser!";
    result.style.color = "red";
    text.innerHTML = 'Try again'
  }
};

// add event listener
rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);
