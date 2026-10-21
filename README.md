# Weather Dashboard

A responsive weather app built with React. Search for any city to see the current weather and a 5-day forecast, with a background that changes to match the conditions and a light/dark theme.

**Live demo:** <your-vercel-link>

![Light mode](screenshots/light.png)
![Dark mode](screenshots/dark.png)

## Features

- Search any city and see temperature, condition and humidity
- 5-day temperature forecast chart (Recharts)
- Background image that changes with the weather (clear, clouds, rain, storm, snow)
- Light/dark theme, remembered between visits
- Loading and error states (e.g. city not found)

## Tech stack

- React + Vite
- Recharts
- OpenWeather API (`/weather` and `/forecast`)
- Plain CSS with custom properties (no UI library)

## Run locally

```bash
git clone <your-repo-url>
cd weather-dashboard
npm install
cp .env.example .env     # then add your OpenWeather API key
npm run dev
```

Get a free key at [openweathermap.org](https://openweathermap.org/api).

## How it works

- **Data:** the current weather and the forecast are fetched in parallel with `Promise.all`. The forecast endpoint returns a reading every 3 hours, so I keep only the noon reading of each day to get one point per day.
- **Theming:** colors are CSS variables. Setting `data-theme` on the app wrapper switches the whole palette, and the choice is saved in `localStorage`.
- **Weather background:** a fixed layer behind the content gets a class from the weather condition (`weather-rain`, etc.). A semi-transparent overlay darkens it in dark mode, and cards use a blur effect to stay readable.
- **State:** `App` owns the data, loading and error state, and passes data down to presentational components (`SearchBar`, `WeatherCard`, `ForecastChart`).

## What I learned

<Write 3-4 bullets in your own words. Ideas: lifting state up; why a try/catch/finally is needed around async calls; the CSS specificity and inheritance issue that broke dark mode at first; why a stacking context (`isolation: isolate`) was needed for the background layer.>

## Possible improvements

- Move the API call to a serverless function so the API key is not exposed in the browser
- Search by geolocation
- Unit toggle (°C / °F)
- Tests for the data-mapping functions

## Credits

Background photos from pexels .
Weather data by [OpenWeather](https://openweathermap.org).