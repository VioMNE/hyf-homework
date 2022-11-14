const setTimeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Called after 3 sec");
  }, 3000);
});

const getCurrentPositionPromise = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const getCurrentPosition = `Latitude: ${position.coords.latitude} Longtude:${position.coords.longitude}`;
    resolve(getCurrentPosition);
  });
});

Promise.all([setTimeoutPromise, getCurrentPositionPromise])
  .then((response) => {
    console.log(response[0]);
    console.log(response[1]);
  })
  .catch(() => {
    console.log("Error");
  });
