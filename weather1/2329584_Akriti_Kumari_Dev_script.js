// Create an object named 'weather' with an API key and methods to fetch and display weather data
let weather = {
  apiKey: "4fd925a431a455b3159a350f2ccb1605",

  // Method to fetch weather data for a given city using the OpenWeatherMap API
  fetchWeather: function (city) {
    // Use the Fetch API to make a GET request to the OpenWeatherMap API with the city and API key
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        // If the response is not ok, throw an error and display an alert
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        // If the response is ok, parse the response as JSON
        return response.json();
      })
      .then((data) => this.displayWeather(data)); // Call the displayWeather method with the parsed JSON data
  },

  // Method to display weather data on the webpage
  displayWeather: function (data) {
    // Destructure the required data from the JSON object
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // Update the webpage with the fetched data
    document.querySelector(".country").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".desc").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " m/s";
    document.querySelector(".weather").classList.remove("loading"); // Remove the loading class from the weather element
  },

  // Method to initiate a weather search using the search bar input value
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// Add an event listener to the search button to call the search method when clicked
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

// Add an event listener to the search bar input to call the search method when the Enter key is pressed
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// Fetch weather data for Leicester when the webpage is loaded
weather.fetchWeather("Leicester");
