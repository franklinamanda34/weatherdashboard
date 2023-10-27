document.addEventListener("DOMContentLoaded", function ()
{const apiKey ="9700fe97dc4863f4aea1ad85c22f3770";
const citySearchForm = document.getElementById("city-search-form");
const cityInput = document.getElementById("city-input");
const currentCondition = document.getElementById("current-condition");
const cityName = document.getElementById("city-name");
const date = document.getElementById("date");
const temperature = document.getElementById("temperature")
citySearchForm.addEventListener("submit", function (e) {
e.preventDefault();
const city = cityInput.value;
if (city) {
fetchWeatherData(city);
}
});
function fetchWeatherData(city) {
const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
fetch(endpoint)
.then((response) => response.json())
.then((data) => {updateWeatherInfo(data);
})
.catch((error) => { console.error("error:", error);
});
}
function updateWeatherInfo(data) {
    const cityData = data.city;
    const weatherData = data.list[0];
    const temperatureCelsius = weatherData.main.temp;
  cityName.textContent = cityData.name;
    date.textContent = new Date(weatherData.dt).toLocaleDateString();
    temperature.textContent = `temperature: ${temperatureCelsius}°C`;
    const temperatureValue = weatherData.main.temp;
    

}

});
