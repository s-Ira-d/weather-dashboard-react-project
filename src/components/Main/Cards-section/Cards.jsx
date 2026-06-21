import {
  Section,
  CardsContainer,
  WeatherCard,
  Time,
  WeatherImage,
  WeatherButton,
  Temperature,
  TopRow,
  Country,
  City,
  DateBlock,
  Date,
  DateDivider,
  WeekDay,
  CardBottom,
  BottomIcon,
  DetailsButton,
} from "./Cards.styled.js";
import sun from "../../../img/sun.png";
import refresh from "../../../img/refresh.png";
import heart from "../../../img/heart.png";
import bin from "../../../img/delete.png";

const CardsSection = () => {
  const today = new Date();

  const currentTime = today.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const currentDate = today.toLocaleDateString("en-GB");

  const currentWeekDay = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <Section>
      <CardsContainer>
        {[1, 2, 3].map((item) => (
          <WeatherCard>
            <TopRow>
              <Country>Ukraine</Country>
              <City>Kyiv</City>
            </TopRow>

            <Time>{currentTime}</Time>

            <WeatherButton>Hourly forecast</WeatherButton>

            <DateBlock>
              <Date>{currentDate}</Date>

              <DateDivider />

              <WeekDay>{currentWeekDay}</WeekDay>
            </DateBlock>

            <WeatherImage src={sun} alt="weather" />

            <Temperature>22°C</Temperature>

            <CardBottom>
              <BottomIcon src={refresh} alt="refresh" />
              <BottomIcon
                src={heart}
                alt="heart"
                style={{ marginLeft: "-30px" }}
              />

              <DetailsButton>See more</DetailsButton>

              <BottomIcon src={bin} alt="delete" />
            </CardBottom>
          </WeatherCard>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default CardsSection;
