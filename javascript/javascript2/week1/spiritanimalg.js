const spiritAnimal = [
  "Confident Bear",
  "Competitive Wolf",
  "Introverted Panda",
  "Graceful Butterfly",
  "Powerful Horse",
  "Mischivous Fox",
  "Strongwilled Tiger",
  "Couregues Lion",
  "Loving Dolphin",
  "Optimistic Hawk",
];

const userInputEL = document.getElementById("user-name");
const buttonEl = document.getElementById("convert-animal");
const nameSpaceEl = document.getElementById("animal-name");

buttonEl.addEventListener("click", renderName);
userInputEL.addEventListener("keydown", renderOnEnter);

function randomNamePicker(spiritAnimals) {
  const randomName =
    spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  return randomName;
}

const getName = function () {
  const userInput = userInputEL.value;
  return userInput;
};

function renderName() {
  const userName = getName();
  if (userName === "") {
    nameSpaceEl.innerText = `Please enter a name!`;
  } else {
    nameSpaceEl.innerText = `${userName} - ${randomNamePicker(spiritAnimal)}`;
    userInputEL.value = "";
  }
}

function renderOnEnter(e) {
  if (e.key === "Enter") {
    renderName();
  }
}
