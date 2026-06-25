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

  @media (max-width: 1199px) {
    padding: 22px 30px;
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 40px;

  @media (max-width: 1199px) {
    font-size: 15px;
    margin-bottom: 25px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

export const DaysGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1199px) {
    gap: 8px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const DayCard = styled.div`
  background: #d9d9d9;
  border-radius: 10px;
  padding: 8px 34px;
  max-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1199px) {
    padding: 8px 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    max-height: none;
    padding: 12px;
    gap: 8px;
  }
`;

export const LeftBlock = styled.div`
  width: 140px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const DayName = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
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

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
  }
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

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const RightBlock = styled.div`
  width: 180px;
  text-align: right;

  @media (max-width: 767px) {
    width: 100%;
    text-align: left;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
