// //psudocoding global variables
var weatherApiUrl = "http://api.openweathermap.org/"
var apiKey = '7821430c7057a531aa96447991e46bd9'

//html GLOBAL variables
var searchBtn = document.getElementById("search-btn")
var search = document.getElementById("search")
var searchHistory = document.getElementById("search-history")
var today = document.getElementById("today")
var currentDay = document.getElementById("current-day")
var forecast = document.getElementById("forecast")

///geo/1.0/direct?q=London&limit=5&appid={API key}
//data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

searchBtn.addEventListener("click", searchval)
function searchval(event){
    if (!search.value){
        return
    }
    event.preventDefault()
    var searchform = search.value.trim()
    fetchcity(searchform)
}

function fetchcity(searchform){
   var apiurl =`${weatherApiUrl}geo/1.0/direct?q=${searchform}&limit=5&appid=${apiKey}`
   console.log(apiurl)
    fetch(apiurl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
    console.log(data[0])
    console.log(data[0].name)
    //savedcity (searchform)
    fetchweather(data[0])
    })
    .catch(function (err) {
      console.error(err);
    });
}
function fetchweather (location){
    var{lat,lon} = location
    var city = location.name
    var apiurl =`${weatherApiUrl}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
   console.log(apiurl)
    fetch(apiurl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
    console.log(data)
    //console.log(data[0].name)
    displayweather(city, data)
    })
    .catch(function (err) {
      console.error(err);
    });
}

function displayweather (city, data){
    currentweather(city, data.list[0], data.city.timezone )
    fivedayforcast(data.list)
}

function currentweather (city, weather, timezone){
    console.log(weather)
    console.log (timezone)
    var citydisplay = document.querySelector(".cardTodayCityName")
    citydisplay.textContent = city

    var humidity = weather.main.humidity
    var temp = weather.main.temp
    var windspeed = weather.wind.speed
 var humidityel = document.createElement("p")
 humidityel.setAttribute('class', 'card-text');
    var datadisplay = document.querySelector(".cardBodyToday")
    humidityel.textContent = `humidity: ${humidity}`
datadisplay.appendChild(humidityel)
}












function fivedayforcast (forecast){
    console.log(forecast)











}