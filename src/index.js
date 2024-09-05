let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

function displayDateTime() {
  let formattedTime = `${dayName} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  let dateTime = document.querySelector("#current-datetime");
  dateTime.innerHTML = formattedTime;
}
displayDateTime();

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateCityName(event) {
  event.preventDefault();

  let inputCityName = capFirst(searchInput.value);
  cityName.innerHTML = inputCityName;
  updateTemperature(inputCityName);
}

function currentTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let weatherElement = document.querySelector("#weather");
  weatherElement.innerHTML = temperature;
}

function updateTemperature(city) {
  let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(currentTemperature);
}

let cityName = document.querySelector("#city-name");

let searchInput = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener(`submit`, updateCityName);

/* 
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

    
    
    
    
    
    
    
    
    
    
    */
