import Header from "./components/Header/Header.jsx";
import Hero from "./components/Main/Hero-section/Hero.jsx";
import Cards from "./components/Main/Cards-section/Cards.jsx";
import WeatherDetails from "./components/Main/Cards-section/WeatherDetails.jsx";
import HourlyForecast from "./components/Main/Cards-section/HourlyForecast.jsx";
import WeeklyForecast from "./components/Main/Cards-section/WeeklyForecast.jsx";
import News from "./components/Main/News-section/News.jsx";
import Gallery from "./components/Main/Gallery-section/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { AppWrapper } from "./App.styled";

import { useState, useEffect } from "react";

const API_KEY = "f68981f183c27f389004dfc15b729fd9";

function App() {
  const [weeklyCity, setWeeklyCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [hourlyCity, setHourlyCity] = useState(null);
  const [cards, setCards] = useState([]);

  const [searchedCities, setSearchedCities] = useState(() => {
    const saved = localStorage.getItem("searchedCities");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
  }, [searchedCities]);

  const getWeather = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return {
      id: Date.now() + Math.random(),

      city: data.name,
      country: data.sys.country,

      temp: `${Math.round(data.main.temp)}°C`,

      minTemp: Math.round(data.main.temp_min),
      maxTemp: Math.round(data.main.temp_max),

      feelsLike: Math.round(data.main.feels_like),

      humidity: data.main.humidity,
      pressure: data.main.pressure,

      wind: data.wind.speed,

      visibility: Math.round(data.visibility / 1000),

      clouds: data.clouds.all,

      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,

      lat: data.coord.lat,
      lon: data.coord.lon,

      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  };

  const loadDefaultCities = async () => {
    try {
      const kyiv = await getWeather("Kyiv");
      const paris = await getWeather("Paris");
      const berlin = await getWeather("Berlin");

      setCards([kyiv, paris, berlin]);

      setSearchedCities((prev) => {
        const cities = [...prev];

        [kyiv.city, paris.city, berlin.city].forEach((city) => {
          if (!cities.includes(city)) {
            cities.push(city);
          }
        });

        return cities;
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDefaultCities();
  }, []);

  const addCityCard = async (city) => {
    try {
      const weather = await getWeather(city);

      setCards((prev) => [...prev, weather]);

      setSearchedCities((prev) => {
        if (prev.includes(weather.city)) {
          return prev;
        }

        return [...prev, weather.city];
      });
    } catch {
      alert("City not found");
    }
  };

  return (
    <AppWrapper>
      <Header />

      <main style={{ flex: 1 }}>
        <Hero onAddCity={addCityCard} searchedCities={searchedCities} />

        <Cards
          cards={cards}
          setCards={setCards}
          setSelectedCity={setSelectedCity}
          setHourlyCity={setHourlyCity}
          setWeeklyCity={setWeeklyCity}
        />

        <WeatherDetails city={selectedCity} />

        <HourlyForecast city={hourlyCity} />

        <WeeklyForecast city={weeklyCity} />

        <News />
        <Gallery />
      </main>

      <Footer />
    </AppWrapper>
  );
}

export default App;
