const API_KEY = "c74dbfaccd0bce30b4104903f9c059ec";

export async function fetchWeather(city = "Toronto") {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},ON,CA&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error("Weather API error");
    }

    const data = await res.json();
    return {
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    };
  } catch (err) {
    console.error("Failed to fetch weather:", err.message);
    return null;
  }
}
