import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background: white;

  @media (max-width: 1199px) {
    padding: 60px 0;
  }

  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

export const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1199px) {
    max-width: 700px;
    gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Cell = styled.div`
  background: #d9d9d9;
  border-radius: 10px;
  padding: 5px 30px;
  text-align: center;

  @media (max-width: 1199px) {
    padding: 5px 20px;
  }

  @media (max-width: 767px) {
    padding: 20px 15px;
  }
`;

export const CellTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const CellValue = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 26px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;
export const BackgroundBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #e8e8e8;
  border-radius: 15px;
  padding: 40px;

  @media (max-width: 1199px) {
    padding: 30px;
    max-width: 800px;
  }

  @media (max-width: 767px) {
    padding: 20px;
    border-radius: 12px;
  }
`;

export const CellImage = styled.img`
  width: 85px;
  height: 85px;
  object-fit: contain;
  margin: 15px 0;

  @media (max-width: 1199px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`;
