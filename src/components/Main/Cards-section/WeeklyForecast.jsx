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
  DayDate,
  WeatherIcon,
  Temp,
  Description,
} from "./WeeklyForecast.styled";
import img1 from "../../../img/img1.png";
import img2 from "../../../img/img2.png";
import img3 from "../../../img/img3.png";
import img4 from "../../../img/img4.png";
import img5 from "../../../img/img5.png";

const WeeklyForecast = ({ city }) => {
  if (!city) return null;

  const weekData = [
    {
      day: "Mon",
      date: "Jun 21",
      img: img1,
      temp: "24°C / 18°C",
      description: "Sunny weather",
    },
    {
      day: "Tue",
      date: "Jun 22",
      img: img2,
      temp: "25°C / 19°C",
      description: "Partly cloudy",
    },
    {
      day: "Wed",
      date: "Jun 23",
      img: img3,
      temp: "22°C / 17°C",
      description: "Light rain",
    },
    {
      day: "Thu",
      date: "Jun 24",
      img: img4,
      temp: "21°C / 16°C",
      description: "Windy day",
    },
    {
      day: "Fri",
      date: "Jun 25",
      img: img5,
      temp: "23°C / 18°C",
      description: "Sunny weather",
    },
    {
      day: "Sat",
      date: "Jun 26",
      img: img4,
      temp: "26°C / 20°C",
      description: "Clear sky",
    },
    {
      day: "Sun",
      date: "Jun 27",
      img: img3,
      temp: "24°C / 18°C",
      description: "Partly cloudy",
    },
    {
      day: "Mon",
      date: "Jun 28",
      img: img2,
      temp: "22°C / 17°C",
      description: "Light rain",
    },
  ];

  return (
    <Section id="weekly-forecast">
      <BackgroundBox>
        <Title>8-day {city} forecast</Title>

        <DaysGrid>
          {weekData.map((item, index) => (
            <DayCard key={index}>
              <LeftBlock>
                <DayName>
                  {item.day}, {item.date}
                </DayName>
              </LeftBlock>

              <CenterBlock>
                <WeatherIcon src={item.img} alt="weather" />
                <Temp>{item.temp}</Temp>
              </CenterBlock>

              <RightBlock>
                <Description>{item.description}</Description>
              </RightBlock>
            </DayCard>
          ))}
        </DaysGrid>
      </BackgroundBox>
    </Section>
  );
};

export default WeeklyForecast;
