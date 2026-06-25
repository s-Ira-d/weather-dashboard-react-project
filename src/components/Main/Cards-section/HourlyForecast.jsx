import { useEffect, useState } from "react";
import {
  Section,
  BackgroundBox,
  Title,
  TimesRow,
  TimeLabel,
} from "./HourlyForecast.styled";

import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

      const chartData = data.list.slice(0, 8).map((item) => {
        const date = new Date(item.dt * 1000);

        return {
          time: date.toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
          }),
          temp: Math.round(item.main.temp),
        };
      });

      setForecast(chartData);
    };

    loadForecast();
  }, [city]);

  if (!city) return null;

  return (
    <Section id="hourly-forecast">
      <BackgroundBox>
        <Title>{city.city} hourly forecast</Title>
        <TimesRow>
          {forecast.map((item, i) => (
            <TimeLabel key={i}>{item.time}</TimeLabel>
          ))}
        </TimesRow>
        <ResponsiveContainer
          width="100%"
          height={window.innerWidth < 768 ? 220 : 380}
        >
          <LineChart data={forecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d0d0d0" />
            <YAxis
              stroke="transparent"
              tick={{ fill: "#666", fontSize: 12 }}
              domain={["dataMin - 2", "dataMax + 2"]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#FFB36C"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </BackgroundBox>
    </Section>
  );
};

export default HourlyForecast;
