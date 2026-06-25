import styled from "styled-components";

export const Section = styled.section`
  padding: 90px 0;
  background: white;

  @media (max-width: 1199px) {
    padding: 60px 0;
  }

  @media (max-width: 767px) {
    padding: 35px 0;
  }
`;

export const BackgroundBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #e8e8e8;
  border-radius: 18px;
  padding: 28px 40px;

  @media (max-width: 1199px) {
    max-width: 800px;
    padding: 22px 25px;
  }

  @media (max-width: 767px) {
    padding: 15px;
    border-radius: 12px;
  }
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 18px;

  @media (max-width: 1199px) {
    font-size: 15px;
    margin-bottom: 14px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const TimesRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 0 12px;

  @media (max-width: 1199px) {
    padding: 0 8px;
  }

  @media (max-width: 767px) {
    padding: 0 4px;
    gap: 4px;
    overflow-x: auto;
  }
`;

export const TimeLabel = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #333;

  @media (max-width: 1199px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    white-space: nowrap;
  }
`;
