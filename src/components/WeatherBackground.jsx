import { useEffect, useState } from "react";

const WeatherBackground = ({ weatherKey }) => {
  const [loadedKey, setLoadedKey] = useState("default");

  useEffect(() => {
    if (weatherKey === "default") {
      setLoadedKey("default");
      return;
    }
    const img = new Image();
    img.src = `/weather/${weatherKey}.jpg`;
    img.onload = () => setLoadedKey(weatherKey);
  }, [weatherKey]);

  return (
    <div key={loadedKey} className={`weather-bg weather-${loadedKey}`}></div>
  );
};

export default WeatherBackground;
