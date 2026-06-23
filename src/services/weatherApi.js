const API_KEY = "f68981f183c27f389004dfc15b729fd9";

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};

export const getForecast = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    throw new Error("Forecast not found");
  }

  return response.json();
};
