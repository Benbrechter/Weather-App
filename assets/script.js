var cityDisplay = document.querySelector('#city-display');
var tempDisplay = document.querySelector('#temp-display');
var windDisplay = document.querySelector('#wind-display');
var humidityDisplay = document.querySelector('#humidity-display');

let apiKey = '0a4a3a2ba95dc7f27ed0c81a22a94389';
let city = 'Houston';

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=Imperial";

var searchCity = document.querySelector("#user-city")
var searchBtn = document.querySelector("#search-btn")

async function userCity(city){    
const response = await fetch(queryURL);
var data = await response.json();
console.log(data);

cityDisplay.innerHTML = data.name + dayjs().format(' MM/DD/YY');
tempDisplay.innerHTML = "Tempeture: " + Math.round(data.main.temp)  + " °f" ;
windDisplay.innerHTML = "Wind Speed: " +  Math.round(data.wind.speed) + " mph";
humidityDisplay.innerHTML = "Humidity: " + data.main.humidity + "%"

}

searchBtn.addEventListener('click', ()=>{
userCity(searchCity.value)
})
userCity()