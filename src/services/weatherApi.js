const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export const getWeatherbyCity = async (cityName) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`City "${cityName}" not found.`);
  }
  const data = await response.json();
  return {
    name: data.name,
    temperature: Math.round(data.main.temp),
    condition: data.weather[0].main,
    humidity: data.main.humidity,
  };
};
export const getForecastbyCity = async (cityName) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Forecast for "${cityName}" not found.`);
  }
  const data = await response.json();

  const noonReadings = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return noonReadings.slice(0, 5).map((item) => {
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    return { day, temp: Math.round(item.main.temp) };
  });
};
