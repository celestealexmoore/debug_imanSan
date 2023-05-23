//psudocoding global variables
var weatherapiurl = `http://api.openweathermap.org/`;
var apikey = "7821430c7057a531aa96447991e46bd9";
//html variables
var searchbtn = document.getElementById("search-btn");
var search = document.getElementById("search");
var searchhistory = document.getElementById("search-history");
var today = document.getElementById("today");
var currentday = document.getElementById("current-day");
var forcast = document.getElementById("forecast");
///geo/1.0/direct?q=London&limit=5&appid={API key}
//data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
searchbtn.addEventListener("click", searchval);
function searchval(event) {
  if (!search.value) {
    return;
  }
  event.preventDefault();
  var searchform = search.value.trim();
  fetchcity(searchform);
}
function fetchcity(searchform) {
  var apiurl = `${weatherapiurl}geo/1.0/direct?q=${searchform}&limit=5&appid=${apikey}`;
  console.log(apiurl);
  fetch(apiurl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data[0]);
      console.log(data[0].name);
      //savedcity (searchform)
      fetchweather(data[0]);
    })
    .catch(function (err) {
      console.error(err);
    });
}
function fetchweather(location) {
  var { lat, lon } = location;
  var city = location.name;
  var apiurl = `${weatherapiurl}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;
  console.log(apiurl);
  fetch(apiurl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      //console.log(data[0].name)
      displayweather(city, data);
    })
    .catch(function (err) {
      console.error(err);
    });
}
function displayweather(city, data) {
  currentweather(city, data.list[0], data.city.timezone);
  fivedayforcast(data.list);
}
function currentweather(city, weather, timezone) {
  console.log(weather);
  console.log(timezone);
  var citydisplay = document.querySelector(".cardTodayCityName");
  citydisplay.textContent = city;
  var humidity = weather.main.humidity;
  var temp = weather.main.temp;
  var windspeed = weather.wind.speed;
  var humidityel = document.createElement("p");
  humidityel.setAttribute("class", "card-text");
  var datadisplay = document.querySelector(".cardBodyToday");
  humidityel.textContent = `humidity: ${humidity}`;
  datadisplay.appendChild(humidityel);
}
function fivedayforcast(forecast) {
  console.log(forecast);
}
