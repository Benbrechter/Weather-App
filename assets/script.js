var cityDisplay = document.querySelector('#city-display');
var tempDisplay = document.querySelector('#temp-display');
var windDisplay = document.querySelector('#wind-display');
var humidityDisplay = document.querySelector('#humidity-display');

let apiKey = '0a4a3a2ba95dc7f27ed0c81a22a94389';
let city = 'Houston';
let units = 'standard';

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + units;

fetch(queryURL)
.then(response => response.json())
.then(json => console.log(json))






//var userCity = function(city){

//}