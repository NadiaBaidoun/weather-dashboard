import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { getForecastbyCity, getWeatherbyCity } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import ForecastChart from "./components/ForecastChart";
import { getInitialTheme } from "./utils/theme";
import { getWeatherKey } from "./utils/weatherTheme";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const weatherKey = getWeatherKey(weatherData?.condition);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      console.log("Could not save theme:", err);
    }
  }, [theme]);
  const toggleTheme = () => {
    console.log(theme);

    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const handleInputChange = (value) => {
    if (value.trim() === "") {
      setWeatherData(null);
      setForecastData(null);
      setError(null);
    }
  };
  const handleSearch = async (cityName) => {
    setIsLoading(true);
    setError(null);
    try {
      const [data, forecast] = await Promise.all([
        getWeatherbyCity(cityName),
        getForecastbyCity(cityName),
      ]);
      setWeatherData(data);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="app" data-theme={theme}>
      <div className={`weather-bg weather-${weatherKey}`} />
      <main className="container">
        <header className="header card">
          <h1>Weather dashboard </h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </header>

        <SearchBar
          onSearch={handleSearch}
          onInputChange={handleInputChange}
        ></SearchBar>
        {isLoading && <p className="status">loading...</p>}
        {error && <p className="status error">{error}</p>}
        {weatherData && <WeatherCard data={weatherData}></WeatherCard>}
        {forecastData && (
          <ForecastChart forecast={forecastData}></ForecastChart>
        )}
      </main>
    </div>
  );
}

export default App;
