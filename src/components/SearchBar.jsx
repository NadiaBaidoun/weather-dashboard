import { useState } from "react";

const SearchBar = ({ onSearch, onInputChange }) => {
  const [cityInput, setCityInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setCityInput(value);
    onInputChange(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent defult  refresh form when we submit
    if (cityInput.trim() === "") return;
    onSearch(cityInput);
  };
  return (
    <form  className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={cityInput}
        onChange={handleChange}
        placeholder="Enter a city"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
