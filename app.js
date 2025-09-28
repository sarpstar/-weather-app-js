const API_KEY = "YOUR_API_KEY";

async function getWeather() {
  const city = document.getElementById("city").value;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
  );
  const data = await res.json();
  document.getElementById("result").innerText =
    `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
}
