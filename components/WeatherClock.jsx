"use client";
import { useEffect, useState } from "react";
import { fetchWeather } from "@/lib/fetchWeather";

const cities = [
  "Toronto",
  "Ottawa",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "London",
  "Markham",
  "Vaughan",
  "Kitchener",
  "Windsor",
  "Sudbury",
  "Guelph",
  "Thunder Bay",
  "St. Catharines",
  "Oakville",
  "Burlington",
  "Oshawa",
  "Kingston",
  "Barrie",
  "Niagara Falls",
];

export default function WeatherClock() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Toronto");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeather(city).then(setWeather);
  }, [city]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div>
        <label className="block mb-2 text-gray-700 dark:text-gray-200 font-medium">
          Select Ontario City:
        </label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded border dark:bg-gray-700 dark:text-white"
        >
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="text-center text-gray-700 dark:text-gray-100">
        <h3 className="text-xl font-bold">{time.toLocaleTimeString()}</h3>
        <p>{time.toLocaleDateString()}</p>
      </div>

      {weather && (
        <div className="flex items-center gap-4">
          <img src={weather.icon} alt={weather.condition} />
          <div>
            <h4 className="text-lg font-semibold">
              {weather.city}, {weather.country}
            </h4>
            <p>
              {weather.temp}°C • {weather.condition}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
