// import "./index.css";
const WeatherCard = ({ data }) => {
  const { name, temperature, condition, humidity } = data;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="temperature">{temperature}°C</p>
      <p className="condition">{condition}</p>
      <p className="humidity">Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;
