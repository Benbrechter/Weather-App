var cityDisplay = document.querySelector('#city-display');
var tempDisplay = document.querySelector('#temp-display');
var windDisplay = document.querySelector('#wind-display');
var humidityDisplay = document.querySelector('#humidity-display');

let apiKey = '0a4a3a2ba95dc7f27ed0c81a22a94389';

var searchCity = document.querySelector("#user-city")
var searchBtn = document.querySelector("#search-btn")

async function userCity(city){    
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=Imperial";

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
forecastCity(searchCity.value)
})

document.getElementById('city-preset').addEventListener('click', () => {
    console.log(event.target.tagName);
    if(event.target.tagName === "BUTTON") {
        userCity(event.target.textContent);
        forecastCity(event.target.textContent)
    }
})
userCity('Houston')


var temp1 = document.querySelector('#temp1')
var temp2 = document.querySelector('#temp2')
var temp3 = document.querySelector('#temp3')
var temp4 = document.querySelector('#temp4')
var temp5 = document.querySelector('#temp5')
//these grab the temp <p> for the html
var wind1 = document.querySelector('#wind1')
var wind2 = document.querySelector('#wind2')
var wind3 = document.querySelector('#wind3')
var wind4 = document.querySelector('#wind4')
var wind5 = document.querySelector('#wind5')
//these grab the wind <p> for the html
var hum1 = document.querySelector('#hum1')
var hum2 = document.querySelector('#hum2')
var hum3 = document.querySelector('#hum3')
var hum4 = document.querySelector('#hum4')
var hum5 = document.querySelector('#hum5')
//these are calling to the humidity tags 

async function forecastCity(city) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&units=Imperial&appid=0a4a3a2ba95dc7f27ed0c81a22a94389" ;

var response = await fetch(url)
 var data = await response.json();
console.log(data);


temp1.innerHTML = "Tempeture: " + Math.round(data.list[0].main.temp) + " °f"
temp2.innerHTML = "Tempeture: " + Math.round(data.list[1].main.temp) + " °f"
temp3.innerHTML = "Tempeture: " + Math.round(data.list[2].main.temp) + " °f"
temp4.innerHTML = "Tempeture: " + Math.round(data.list[3].main.temp) + " °f"
temp5.innerHTML = "Tempeture: " + Math.round(data.list[4].main.temp) + " °f"


wind1.innerHTML = "Wind Speed: " +  Math.round(data.list[0].wind.speed) + " mph";
wind2.innerHTML = "Wind Speed: " +  Math.round(data.list[1].wind.speed) + " mph";
wind3.innerHTML = "Wind Speed: " +  Math.round(data.list[2].wind.speed) + " mph";
wind4.innerHTML = "Wind Speed: " +  Math.round(data.list[3].wind.speed) + " mph";
wind5.innerHTML = "Wind Speed: " +  Math.round(data.list[4].wind.speed) + " mph";

hum1.innerHTML = "Humidity: " + Math.round(data.list[0].main.humidity) + "%";
hum2.innerHTML = "Humidity: " + Math.round(data.list[1].main.humidity) + "%";
hum3.innerHTML = "Humidity: " + Math.round(data.list[2].main.humidity) + "%";
hum4.innerHTML = "Humidity: " + Math.round(data.list[3].main.humidity) + "%";
hum5.innerHTML = "Humidity: " + Math.round(data.list[4].main.humidity) + "%";
}
forecastCity('Houston')