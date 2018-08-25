export function getForecastFrom(city) {
  //return Promise.resolve([1, 2, 3]);
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68f2b1674d9d82ade69819d239977027
  `).then(response => response.json());
}
