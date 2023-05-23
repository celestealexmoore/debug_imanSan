// //psudocoding global variables
var weatherApiUrl = "http://api.openweathermap.org/";
var apiKey = "7821430c7057a531aa96447991e46bd9";

//html GLOBAL variables
var searchBtn = document.getElementById("search-btn");
var search = document.getElementById("search");
var searchHistory = document.getElementById("search-history");
var today = document.getElementById("today");
var currentDay = document.getElementById("current-day");
var forecast = document.getElementById("forecast");

///geo/1.0/direct?q=London&limit=5&appid={API key}
//data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

searchBtn.addEventListener("click", searchVal);
function searchVal(event) {
  if (!search.value) {
    return;
  }
  event.preventDefault();
  var searchForm = search.value.trim();
  fetchCity(searchForm);
}

function fetchCity(searchForm) {
  var apiUrl = `${weatherApiUrl}geo/1.0/direct?q=${searchForm}&limit=5&appid=${apiKey}`;
  console.log(apiUrl);
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data[0]);
      console.log(data[0].name);
      //savedcity (searchForm)
      fetchWeather(data[0]);
    })
    .catch(function (err) {
      console.error(err);
    });
}
function fetchWeather(location) {
  var { lat, lon } = location;
  var city = location.name;
  var apiUrl = `${weatherApiUrl}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  console.log(apiUrl);
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      //console.log(data[0].name)
      displayWeather(city, data);
    })
    .catch(function (err) {
      console.error(err);
    });
}

function displayWeather(city, data) {
  currentWeather(city, data.list[0], data.city.timezone);
  fiveDayForecast(data.list);
}

function currentWeather(city, weather, timezone) {
  console.log(weather);
  console.log(timezone);
  var citydisplay = document.querySelector(".cardTodayCityName");
  citydisplay.textContent = city;

  var humidity = weather.main.humidity;
  var temp = weather.main.temp;
  var windSpeed = weather.wind.speed;
  var humidityEl = document.createElement("p");
  humidityEl.setAttribute("class", "card-text");
  var datadisplay = document.querySelector(".cardBodyToday");
  humidityEl.textContent = `humidity: ${humidity}`;
  datadisplay.appendChild(humidityEl);
}

function fiveDayForecast(forecast) {
  console.log(forecast);
}
