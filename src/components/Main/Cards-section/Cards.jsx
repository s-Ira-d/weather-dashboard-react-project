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

import sun from "../../../img/sun.png";
import refresh from "../../../img/refresh.png";
import heart from "../../../img/heart.png";
import bin from "../../../img/delete.png";

const CardsSection = () => {
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
              <WeatherButton>Hourly forecast</WeatherButton>
              <WeatherButton>Weekly forecast</WeatherButton>
            </ButtonsWrapper>

            <DateBlock>
              <CardDate>{currentDate}</CardDate>
              <DateDivider />
              <WeekDay>{currentDay}</WeekDay>
            </DateBlock>

            <WeatherImage src={sun} alt="weather" />

            <Temperature>{item.temp}</Temperature>

            <CardBottom>
              <BottomIcon src={refresh} alt="refresh" onClick={refreshCard} />

              <BottomIcon
                src={heart}
                alt="heart"
                onClick={() => addToFavorites(item.city)}
              />

              <DetailsButton>See more</DetailsButton>

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
