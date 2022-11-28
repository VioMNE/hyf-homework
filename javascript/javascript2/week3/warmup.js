// Log out the text

const logOutText = function () {
  console.log("Called after 2.5 sec");
};
setTimeout(logOutText, 2500);

//Function that takes 2 parameters: delay and stringToLog

function logString(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

logString(5, "String is logged out after 5 secs");
logString(3, "String is logged out after 3 secs");

// Create a button in htm
document
  .getElementById("button")
  .addEventListener("click", () =>
    logString(5, "String is logged out after 5 secs")
  );

//Create two functions and assign them to two different variables.Now create a new third function that has one parameter: planetLogFunction

const earth = function earthLogger() {
  console.log("Earth");
};

const saturn = function saturnLogger() {
  console.log("Saturn");
};

function planetLogFunction(f) {
  f();
}

planetLogFunction(earth);
planetLogFunction(saturn);

//Create a button with the text called "Log location".
function locations() {
  function latitudeLongtitude(possition) {
    const coordinate = possition.coords;

    console.log(`This is the Latitude : ${coordinate.latitude.toFixed(15)}`);
    console.log(`This is the Longitude: ${coordinate.longitude}`);
  }

  navigator.geolocation.getCurrentPosition(latitudeLongtitude);
}

document.getElementById("location").addEventListener("click", locations);

//Create a function called runAfterDelay. It has two parameters: delay and callback.

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("Should be logged after 4 sec");
});

//Check if we have double clicked on the page.

const button = document.querySelector("button");

let timeStampOld = new Date();
const checkDoubleClick = () => {
  let timeStampNew = new Date();
  let timeDifference = timeStampNew - timeStampOld; // time in milli seconds
  if (timeDifference / 1000 < 0.5) {
    console.log(
      `DOUBLE click : time difference ${timeDifference} milli seconds`
    );
  } else {
    console.log(
      `Not a double click: time difference ${timeDifference} milli seconds`
    );
  }
  timeStampOld = timeStampNew;
};

button.addEventListener("click", checkDoubleClick);

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function logFunnyJoke() {
  console.log("That was funny");
}
function logBadJoke() {
  console.log("What was that??? Not funny at all!!!");
}

jokeCreator(true, logFunnyJoke, logBadJoke);
