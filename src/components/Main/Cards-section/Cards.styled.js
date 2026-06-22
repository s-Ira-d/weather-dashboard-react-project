import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background: white;
`;

export const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  justify-items: center;
`;

export const WeatherCard = styled.div`
  width: 250px;
  max-height: 400px;
  background-color: #e8e8e8;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Country = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  font-family: "Montserrat", sans-serif;
`;

export const City = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  font-family: "Montserrat", sans-serif;
`;

export const Time = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 10px;
  font-family: "Montserrat", sans-serif;
`;

export const WeatherButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  background: #ffb36c;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 10px;
`;

export const DateBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

export const CardDate = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

export const DateDivider = styled.div`
  width: 1px;
  height: 15px;
  background: #000;
`;

export const WeekDay = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

export const WeatherImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const Temperature = styled.h2`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 32px;
  margin-top: -10px;
`;

export const CardBottom = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: -10px;
`;

export const BottomIcon = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

export const DetailsButton = styled.button`
  border: none;
  background: #ffb36c;
  padding: 8px 18px;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;
