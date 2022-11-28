//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const arrFunction = [
  function fOne() {
    console.log("Called first function");
  },
  function fTwo() {
    console.log("Called second function");
  },
  function fThree() {
    console.log("Called third function");
  },
];
arrFunction.forEach((f) => {
  f();
});

//Create a function as a const and try creating a function normally. Call both functions

const person = function personsName(person) {
  console.log(`Hi nice to meet you ${person}`);
};

function personsName(person) {
  console.log(`Your person was ${person}, right?`);
}

person("Violeta");
personsName("Violeta");

// Create an object that has a key whose value is a function. Try calling this function.

const myObject = {
  keyFunction: () => {
    return "This is object key";
  },
};

console.log(myObject.keyFunction());
