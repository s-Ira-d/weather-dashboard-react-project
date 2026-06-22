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
import { useState } from "react";

function App() {
  const [weeklyCity, setWeeklyCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [hourlyCity, setHourlyCity] = useState(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      country: "Ukraine",
      city: "Kyiv",
      temp: "22°C",
    },
    {
      id: 2,
      country: "France",
      city: "Paris",
      temp: "18°C",
    },
    {
      id: 3,
      country: "Germany",
      city: "Berlin",
      temp: "20°C",
    },
  ]);

  const addCityCard = (city) => {
    const newCard = {
      id: Date.now(),
      country: "Unknown",
      city,
      temp: `${Math.floor(Math.random() * 20 + 10)}°C`,
    };

    setCards((prev) => [...prev, newCard]);
  };

  return (
    <AppWrapper>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero onAddCity={addCityCard} />
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
