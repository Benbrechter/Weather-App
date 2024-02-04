var cityDisplay = document.querySelector('#city-display');



let apiKey = '0a4a3a2ba95dc7f27ed0c81a22a94389';
let city = 'Houston';

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch(queryURL)
.then(response => response.json())
.then(json => console.log(json))

