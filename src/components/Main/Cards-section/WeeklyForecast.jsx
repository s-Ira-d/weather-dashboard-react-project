import { useEffect, useState } from "react";

import {
  Section,
  BackgroundBox,
  Title,
  DaysGrid,
  DayCard,
  LeftBlock,
  CenterBlock,
  RightBlock,
  DayName,
  WeatherIcon,
  Temp,
  Description,
} from "./WeeklyForecast.styled";

const API_KEY = "f68981f183c27f389004dfc15b729fd9";

const WeeklyForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!city) return;

    const loadForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city.city}&appid=${API_KEY}&units=metric`,
        );

        const data = await response.json();

        const groupedDays = {};

        data.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];

          if (!groupedDays[date]) {
            groupedDays[date] = [];
          }

          groupedDays[date].push(item);
        });

        const result = Object.entries(groupedDays)
          .slice(0, 5)
          .map(([date, items]) => {
            const temps = items.map((i) => i.main.temp);

            const minTemp = Math.round(Math.min(...temps));
            const maxTemp = Math.round(Math.max(...temps));

            const middleItem = items[Math.floor(items.length / 2)];

            return {
              date,

              day: new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
              }),

              formattedDate: new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),

              minTemp,
              maxTemp,

              description: middleItem.weather[0].description,

              icon: middleItem.weather[0].icon,
            };
          });

        setForecast(result);
      } catch (error) {
        console.log(error);
      }
    };

    loadForecast();
  }, [city]);

  if (!city) return null;

  return (
    <Section id="weekly-forecast">
      <BackgroundBox>
        <Title>5-day {city.city} forecast</Title>

        <DaysGrid>
          {forecast.map((day) => (
            <DayCard key={day.date}>
              <LeftBlock>
                <DayName>
                  {day.day}, {day.formattedDate}
                </DayName>
              </LeftBlock>

              <CenterBlock>
                <WeatherIcon
                  src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  alt={day.description}
                />

                <Temp>
                  {day.maxTemp}°C / {day.minTemp}°C
                </Temp>
              </CenterBlock>

              <RightBlock>
                <Description>{day.description}</Description>
              </RightBlock>
            </DayCard>
          ))}
        </DaysGrid>
      </BackgroundBox>
    </Section>
  );
};

export default WeeklyForecast;
