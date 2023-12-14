alert("Type location in the search box");

const weather_img = document.querySelector(".image-weather");
const next_1_weather_img = document.querySelector(".next-day-1-img");
const next_2_weather_img = document.querySelector(".next-day-2-img");
const next_3_weather_img = document.querySelector(".next-day-3-img");
const next_4_weather_img = document.querySelector(".next-day-4-img");
const next_5_weather_img = document.querySelector(".next-day-5-img");
const background_img = document.querySelector("background");

let all_result_time;
let apiKey = "cce930f08cacb20cf68ebac8469d7eac";
let apiKey2 = "fcb7f9fc8cceb7e0e7bda625fcb0e0ae";

// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

let fetchWeather = function () {
    let city = document.getElementsByClassName("search-bar")[0].value;
    console.log(city);
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            apiKey
    )
        .then((response) => response.json())
        .then((data) => {
            displayWeather(data);
        });

    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
            city +
            "&units=metric&appid=" +
            apiKey
    )
        .then((response) => response.json())
        .then((data) => {
            displayNext1Weather(data);
            displayNext2Weather(data);
            displayNext3Weather(data);
            displayNext4Weather(data);
            displayNext5Weather(data);
        });
};

let displayWeather = function (data) {
    console.log(data);
    const name = data.name;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const pressure = data.main.pressure;
    const country = data.sys.country;
    const time = data.dt;
    const day = new Date().toLocaleDateString("en-EN", { weekday: "long" });
    // console.log(name, description, temp, humidity, speed);

    document.getElementsByClassName("weather-desc")[0].innerText = description;
    document.getElementsByClassName("weather-temp")[0].innerText = temp;
    document.getElementsByClassName("weather-city")[0].innerText = name;
    document.getElementsByClassName("humidity-value")[0].innerText = humidity;
    document.getElementsByClassName("wind-value")[0].innerText = speed;
    document.getElementsByClassName("pressure-value")[0].innerText = pressure;
    document.getElementsByClassName("weather-day")[0].innerText = day;
    document.getElementsByClassName("weather-country")[0].innerText = country;

    const date = new Date(time * 1000);
    const hour = date.getHours();

    let result;
    if (hour >= 4 && hour <= 16) {
        result = 0;
    } else {
        result = 1;
    }

    console.log(result);

    if (data.weather[0].main == "Clouds" && result == 1) {
        weather_img.src = "./images/cloudy night@2x.png";
        // background_img.src = "./images/clear day-bgg.jpg";
    } else if (data.weather[0].main == "Clouds" && result == 0) {
        weather_img.src = "./images/Cloudy@2x.png";
    } else if (data.weather[0].main == "Clear" && result == 1) {
        weather_img.src = "./images/clear moon@2x.png";
    } else if (data.weather[0].main == "Clear" && result == 0) {
        weather_img.src = "./images/clear sun.png";
    } else if (data.weather[0].main == "Rain") {
        weather_img.src = "./images/rain@2x.png";
    } else if (data.weather[0].main == "Mist") {
        weather_img.src = "./images/mist@2x.png";
    } else if (data.weather[0].main == "Snow") {
        weather_img.src = "./images/snow@2x.png";
    }
};

let displayNext1Weather = function (data) {
    console.log(data);
    //for day
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const nextDay = tomorrow.toLocaleDateString("en-EN", { weekday: "long" });
    document.getElementsByClassName("next-1-weather-day")[0].innerText =
        nextDay;
    ////
    //temp
    const temp = data.list[8].main.temp;
    document.getElementsByClassName("next-1-day-temp")[0].innerText = temp;
    ////
    //time
    const time = data.list[8].dt;

    const date = new Date(time * 1000);
    const hour = date.getHours();

    let result;
    if (hour >= 4 && hour <= 16) {
        result = 0;
    } else {
        result = 1;
    }
    //
    console.log(result);
    //img
    if (data.list[8].weather[0].main == "Clouds" && result == 1) {
        next_1_weather_img.src = "./images/cloudy night@2x.png";
    } else if (data.list[8].weather[0].main == "Clouds" && result == 0) {
        next_1_weather_img.src = "./images/Cloudy@2x.png";
    } else if (data.list[8].weather[0].main == "Clear" && result == 1) {
        next_1_weather_img.src = "./images/clear moon@2x.png";
    } else if (data.list[8].weather[0].main == "Clear" && result == 0) {
        next_1_weather_img.src = "./images/clear sun.png";
    } else if (data.list[8].weather[0].main == "Rain") {
        next_1_weather_img.src = "./images/rain@2x.png";
    } else if (data.list[8].weather[0].main == "Mist") {
        next_1_weather_img.src = "./images/mist@2x.png";
    } else if (data.list[8].weather[0].main == "Snow") {
        next_1_weather_img.src = "./images/snow@2x.png";
    }
    //
};
let displayNext2Weather = function (data) {
    const temp = data.list[16].main.temp;
    document.getElementsByClassName("next-2-day-temp")[0].innerText = temp;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 2);

    const nextDay = tomorrow.toLocaleDateString("en-EN", { weekday: "long" });
    document.getElementsByClassName("next-2-weather-day")[0].innerText =
        nextDay;

    //time
    const time = data.list[16].dt;

    const date = new Date(time * 1000);
    const hour = date.getHours();

    let result;
    if (hour >= 4 && hour <= 16) {
        result = 0;
    } else {
        result = 1;
    }
    //

    //img
    if (data.list[16].weather[0].main == "Clouds" && result == 1) {
        next_2_weather_img.src = "./images/cloudy night@2x.png";
    } else if (data.list[16].weather[0].main == "Clouds" && result == 0) {
        next_2_weather_img.src = "./images/Cloudy@2x.png";
    } else if (data.list[16].weather[0].main == "Clear" && result == 1) {
        next_2_weather_img.src = "./images/clear moon@2x.png";
    } else if (data.list[16].weather[0].main == "Clear" && result == 0) {
        next_2_weather_img.src = "./images/clear sun.png";
    } else if (data.list[16].weather[0].main == "Rain") {
        next_2_weather_img.src = "./images/rain@2x.png";
    } else if (data.list[16].weather[0].main == "Mist") {
        next_2_weather_img.src = "./images/mist@2x.png";
    } else if (data.list[16].weather[0].main == "Snow") {
        next_2_weather_img.src = "./images/snow@2x.png";
    }
    //
};
let displayNext3Weather = function (data) {
    const temp = data.list[24].main.temp;
    document.getElementsByClassName("next-3-day-temp")[0].innerText = temp;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 3);

    const nextDay = tomorrow.toLocaleDateString("en-EN", { weekday: "long" });
    document.getElementsByClassName("next-3-weather-day")[0].innerText =
        nextDay;

    //time
    const time = data.list[24].dt;

    const date = new Date(time * 1000);
    const hour = date.getHours();

    let result;
    if (hour >= 4 && hour <= 16) {
        result = 0;
    } else {
        result = 1;
    }
    //

    //img
    if (data.list[24].weather[0].main == "Clouds" && result == 1) {
        next_3_weather_img.src = "./images/cloudy night@2x.png";
    } else if (data.list[24].weather[0].main == "Clouds" && result == 0) {
        next_3_weather_img.src = "./images/Cloudy@2x.png";
    } else if (data.list[24].weather[0].main == "Clear" && result == 1) {
        next_3_weather_img.src = "./images/clear moon@2x.png";
    } else if (data.list[24].weather[0].main == "Clear" && result == 0) {
        next_3_weather_img.src = "./images/clear sun.png";
    } else if (data.list[24].weather[0].main == "Rain") {
        next_3_weather_img.src = "./images/rain@2x.png";
    } else if (data.list[24].weather[0].main == "Mist") {
        next_3_weather_img.src = "./images/mist@2x.png";
    } else if (data.list[24].weather[0].main == "Snow") {
        next_3_weather_img.src = "./images/snow@2x.png";
    }
    //
};
let displayNext4Weather = function (data) {
    const temp = data.list[32].main.temp;
    document.getElementsByClassName("next-4-day-temp")[0].innerText = temp;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 4);

    const nextDay = tomorrow.toLocaleDateString("en-EN", { weekday: "long" });
    document.getElementsByClassName("next-4-weather-day")[0].innerText =
        nextDay;

    //time
    const time = data.list[32].dt;

    const date = new Date(time * 1000);
    const hour = date.getHours();

    let result;
    if (hour >= 4 && hour <= 16) {
        result = 0;
    } else {
        result = 1;
    }
    //

    //img
    if (data.list[32].weather[0].main == "Clouds" && result == 1) {
        next_4_weather_img.src = "./images/cloudy night@2x.png";
    } else if (data.list[32].weather[0].main == "Clouds" && result == 0) {
        next_4_weather_img.src = "./images/Cloudy@2x.png";
    } else if (data.list[32].weather[0].main == "Clear" && result == 1) {
        next_4_weather_img.src = "./images/clear moon@2x.png";
    } else if (data.list[32].weather[0].main == "Clear" && result == 0) {
        next_4_weather_img.src = "./images/clear sun.png";
    } else if (data.list[32].weather[0].main == "Rain") {
        next_4_weather_img.src = "./images/rain@2x.png";
    } else if (data.list[32].weather[0].main == "Mist") {
        next_4_weather_img.src = "./images/mist@2x.png";
    } else if (data.list[32].weather[0].main == "Snow") {
        next_4_weather_img.src = "./images/snow@2x.png";
    }
    //
};
let displayNext5Weather = function (data) {
    const temp = data.list[39].main.temp;
    document.getElementsByClassName("next-5-day-temp")[0].innerText = temp;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 5);

    const nextDay = tomorrow.toLocaleDateString("en-EN", { weekday: "long" });
    document.getElementsByClassName("next-5-weather-day")[0].innerText =
        nextDay;

    //time
    const time = data.list[39].dt;

    const date = new Date(time * 1000);
    const hour = date.getHours();

    let result;
    if (hour >= 4 && hour <= 16) {
        result = 0;
    } else {
        result = 1;
    }
    //

    //img
    if (data.list[39].weather[0].main == "Clouds" && result == 1) {
        next_5_weather_img.src = "./images/cloudy night@2x.png";
    } else if (data.list[39].weather[0].main == "Clouds" && result == 0) {
        next_5_weather_img.src = "./images/Cloudy@2x.png";
    } else if (data.list[39].weather[0].main == "Clear" && result == 1) {
        next_5_weather_img.src = "./images/clear moon@2x.png";
    } else if (data.list[39].weather[0].main == "Clear" && result == 0) {
        next_5_weather_img.src = "./images/clear sun.png";
    } else if (data.list[39].weather[0].main == "Rain") {
        next_5_weather_img.src = "./images/rain@2x.png";
    } else if (data.list[39].weather[0].main == "Mist") {
        next_5_weather_img.src = "./images/mist@2x.png";
    } else if (data.list[39].weather[0].main == "Snow") {
        next_5_weather_img.src = "./images/snow@2x.png";
    }
    //
};

document
    .getElementsByClassName("submit-btn")[0]
    .addEventListener("click", fetchWeather);
