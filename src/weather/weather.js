export async function updateWeatherDom(coords) {
  const weatherInfo = await getWeather(coords);
  const iconUrl = await getWeatherIconUrl(weatherInfo.iconId);
  document
    .getElementsByClassName('weather__icon')[0]
    .setAttribute('src', iconUrl);
  document.getElementsByClassName('weather__temp-value')[0].innerHTML =
    weatherInfo.temp;
}

async function getWeather(coords) {
  const openweathermapApiKey = '40326ea3804a4505547b07b23debc1d5';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${openweathermapApiKey}&units=metric`,
  );
  const responseJson = await response.json();

  return {
    temp: responseJson.main.temp,
    iconId: responseJson.weather[0].icon,
  };
}

async function getWeatherIconUrl(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
}
