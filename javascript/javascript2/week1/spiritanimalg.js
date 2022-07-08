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

const inputName = document.getElementById("name");
const input = document.getElementById("input");
const randomName = function () {
  if (inputName === "") {
    input.innerHTML = "Please enter name here";
  } else {
    const randomNumber = Math.floor(Math.random() * spiritAnimal.length);
    const randomSpiritAnimal = spiritAnimal[randomNumber];
    input.innerHTML = `${inputName}` + `${randomSpiritAnimal}`;
  }
};
document.getElementById("click").addEventListener("click", randomName);
