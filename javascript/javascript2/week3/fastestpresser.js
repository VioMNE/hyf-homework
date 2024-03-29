const input = document.getElementById("input-textbox");
const button = document.getElementById("btn");
const countS = document.getElementById("counter-s");
const countL = document.getElementById("counter-l");
const messageForS = document.getElementById("winning-message-s");
const messageForL = document.getElementById("winning-message-l");
let confettiGenerator;
let counterS = 0;
let counterL = 0;
let gameEnd = false;
let gameStart = false;

function keyDownCounter() {
  if (input.value > 0 && !gameEnd && gameStart) {
    if (event.code === "KeyS") {
      counterS++;
      countS.textContent = counterS;
    } else if (event.code === "KeyL") {
      counterL++;
      countL.textContent = counterL;
    } else {
      alert(`Please press either "S" or "L"`);
    }
  }
}

function startGame() {
  gameStart = true;
  if (input.value === "") {
    alert("enter number of seconds you want to play!");
    return;
  }

  if (gameEnd) {
    messageForS.textContent = "";
    messageForL.textContent = "";
    counterS = 0;
    counterL = 0;
    countS.textContent = "";
    countL.textContent = "";
    clearConfetti();
    gameEnd = false;
    gameStart = true;
  }
  setTimeout(() => {
    displayGameResult();
  }, input.value * 1000);
}

function displayGameResult() {
  gameEnd = true;
  button.innerText = "Play Again!";
  if (counterS > counterL) {
    messageForS.textContent = "Congratulations! You are the winner!.";
    renderConfetti("s-box");
  } else if (counterS < counterL) {
    messageForL.textContent = "Congratulations! You are the winner!";
    renderConfetti("l-box");
  } else if ((counterS = counterL)) {
    messageForS.textContent = "Sorry, No winner this time";
    messageForL.textContent = "Sorry, No winner this time";
  }
}
function renderConfetti(targetId) {
  let confettiSettings = { target: targetId, width: 400, height: 200 };
  const confetti = new confettiGenerator(confettiSettings);
  confetti.render();
  confettiGenerator = confetti;
}

function clearConfetti() {
  confettiGenerator.clear();
}

document.addEventListener("keydown", keyDownCounter);
button.addEventListener("click", startGame);
