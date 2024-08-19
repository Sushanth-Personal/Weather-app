const apiKey = "39434824df5eb474df852fd58df63565";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&app&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    checkWeather(searchBox.value);
  }
});

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `&appid=${apiKey}&q=${cityName}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(
    data.main.temp
  )}<sup> o</sup>C`;

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}
