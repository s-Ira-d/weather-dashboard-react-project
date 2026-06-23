import { useEffect, useState } from "react";
import { Section, BackgroundBox, Title } from "./HourlyForecast.styled";

const API_KEY = "f68981f183c27f389004dfc15b729fd9";

const HourlyForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!city) return;

    const loadForecast = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.city}&appid=${API_KEY}&units=metric`,
      );

      const data = await response.json();

      setForecast(data.list.slice(0, 8));
    };

    loadForecast();
  }, [city]);

  if (!city) return null;

  return (
    <Section id="hourly-forecast">
      <BackgroundBox>
        <Title>{city.city} hourly forecast</Title>

        {forecast.map((item) => (
          <p key={item.dt}>
            {item.dt_txt.slice(11, 16)} — {Math.round(item.main.temp)}°C
          </p>
        ))}
      </BackgroundBox>
    </Section>
  );
};

export default HourlyForecast;
