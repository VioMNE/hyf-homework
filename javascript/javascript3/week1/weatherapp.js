let weather = {
  apiKey: "1d830fe3d23096694f7435b684c3ae43",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { sunrise, sunset } = data.sys;
    document.querySelector(".city").innerHTML = `Weather in  ${name} `;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = `${Math.round(temp)} °c`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerHTML = `Wind speed: ${speed} km/h`;
    document.querySelector(".sunrise").innerHTML = `Sunrise: ${window
      .moment(sunrise * 1000)
      .format("HH:mm a")} `;
    document.querySelector(".sunset").innerHTML = `Sunset: ${window
      .moment(sunset * 1000)
      .format("HH:mm a")} `;
    document.body.style.backgroundImage = ` url('https://source.unsplash.com/1600x900/?${name}')`;
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Copenhagen");
