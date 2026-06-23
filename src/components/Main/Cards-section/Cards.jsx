import { useState } from "react";
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
  CardDate,
  DateDivider,
  WeekDay,
  CardBottom,
  BottomIcon,
  DetailsButton,
  ButtonsWrapper,
} from "./Cards.styled.js";
import refresh from "../../../img/refresh.png";
import heart from "../../../img/heart.png";
import bin from "../../../img/delete.png";

const CardsSection = ({
  cards,
  setCards,
  setSelectedCity,
  setHourlyCity,
  setWeeklyCity,
}) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  const now = new Date();

  const currentDate = [
    String(now.getDate()).padStart(2, "0"),
    String(now.getMonth() + 1).padStart(2, "0"),
    now.getFullYear(),
  ].join(".");

  const currentDay = now.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const addToFavorites = (city) => {
    alert(`${city} added to favorites`);
  };

  const refreshCard = () => {
    setCurrentTime(
      new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
  };

  const openHourlyForecast = (city) => {
    setHourlyCity(city);

    setTimeout(() => {
      document
        .getElementById("hourly-forecast")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const openWeeklyForecast = (city) => {
    setWeeklyCity(city);

    setTimeout(() => {
      document
        .getElementById("weekly-forecast")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Section id="menu">
      <CardsContainer>
        {cards.map((item) => (
          <WeatherCard key={item.id}>
            <TopRow>
              <Country>{item.country}</Country>
              <City>{item.city}</City>
            </TopRow>

            <Time>{currentTime}</Time>

            <ButtonsWrapper>
              <WeatherButton onClick={() => openHourlyForecast(item)}>
                Hourly forecast
              </WeatherButton>
              <WeatherButton onClick={() => openWeeklyForecast(item)}>
                Weekly forecast
              </WeatherButton>
            </ButtonsWrapper>

            <DateBlock>
              <CardDate>{currentDate}</CardDate>
              <DateDivider />
              <WeekDay>{currentDay}</WeekDay>
            </DateBlock>

            <WeatherImage
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.description}
            />

            <Temperature>{item.temp}</Temperature>

            <CardBottom>
              <BottomIcon src={refresh} alt="refresh" onClick={refreshCard} />

              <BottomIcon
                src={heart}
                alt="heart"
                onClick={() => addToFavorites(item.city)}
              />

              <DetailsButton
                onClick={() => {
                  setSelectedCity(item);

                  setTimeout(() => {
                    document
                      .getElementById("weather-details")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                See more
              </DetailsButton>

              <BottomIcon
                src={bin}
                alt="delete"
                onClick={() => deleteCard(item.id)}
              />
            </CardBottom>
          </WeatherCard>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default CardsSection;
