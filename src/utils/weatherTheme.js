export const getWeatherKey = (condition) => {
  switch (condition) {
    case "Clear":
      return "clear";
    case "Clouds":
      return "clouds";
    case "Rain":
    case "Drizzle":
      return "rain";
    case "Thunderstorm":
      return "storm";
    case "Snow":
      return "snow";
    default:
      return "default";
  }
};
