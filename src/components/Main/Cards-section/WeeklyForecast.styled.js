import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background: white;
`;

export const BackgroundBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #e8e8e8;
  border-radius: 15px;
  padding: 30px 50px;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const DaysGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DayCard = styled.div`
  background: #d9d9d9;
  border-radius: 10px;
  padding: 8px 34px;
  max-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftBlock = styled.div`
  width: 140px;
`;

export const DayName = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

export const DayDate = styled.p`
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

export const CenterBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Temp = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

export const RightBlock = styled.div`
  width: 180px;
  text-align: right;
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
