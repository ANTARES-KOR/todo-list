const COORDS_LS = "coords";
const API_KEY = "3c2dfe71d2ee5db268502143586cc107";

function getWeather(lat, long) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    )
        .then(function (midData) {
            return midData.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
            const temperature = weatherData.main.temp;
            const city = weatherData.name;
            const weather = weatherData.weather.description;
            const weatherObj = {
                city,
                weather,
                temperature,
            };
            printWeather(weatherObj);
        });
}
function printWeather(weatherObj) {
    const citySpan = document.querySelector(".city");
    const tempSpan = document.querySelector(".temp");
    citySpan.innerText = weatherObj.city;
    tempSpan.innerHTML = `${weatherObj.temperature}&#8451;`;
}

function loadCoords() {
    const loadedCoords = JSON.parse(localStorage.getItem(COORDS_LS));
    if (loadedCoords === null) {
        askForCoords();
    } else {
        getWeather(loadedCoords.latitude, loadedCoords.longitude);
    }
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function handleGeoSuccess(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoordsObj(coordsObj);
    getWeather(latitude, longitude);
}
function saveCoordsObj(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}
function handleGeoError() {
    console.log("error");
}

function init() {
    loadCoords();
}

init();
