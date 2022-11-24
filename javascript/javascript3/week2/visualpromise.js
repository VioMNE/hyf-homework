const redElement = document.querySelector(".marks").children[0];
const blueElement = document.querySelector(".marks").children[1];
const greenElement = document.querySelector(".marks").children[2];

const translateOneByOne = () => {
  moveElement(redElement, { x: 20, y: 300 })
    .then(() => {
      console.log("Red element has moved");
      return moveElement(blueElement, { x: 400, y: 300 });
    })
    .then(() => {
      console.log("Blue element has moved");
      return moveElement(greenElement, { x: 400, y: 20 });
    })
    .then(() => {
      console.log("Green element has moved");
    });
};

translateOneByOne();

const translateAllAtOnce = () => {
  const moveRed = moveElement(redElement, { x: 20, y: 300 });
  const moveBlue = moveElement(blueElement, { x: 400, y: 300 });
  const moveGreen = moveElement(greenElement, { x: 400, y: 20 });
  Promise.all([moveRed, moveBlue, moveGreen]).then(() => {
    console.log("All the elements have moved");
  });
};

translateAllAtOnce(); 
