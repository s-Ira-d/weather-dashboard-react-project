import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background: white;
`;

export const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

export const Cell = styled.div`
  background: #d9d9d9;
  border-radius: 10px;
  padding: 5px 30px;
  text-align: center;
`;

export const CellTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

export const CellValue = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

export const BackgroundBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #e8e8e8;
  border-radius: 15px;
  padding: 40px;
`;

export const CellImage = styled.img`
  width: 85px;
  height: 85px;
  object-fit: contain;
  margin: 15px 0;
`;
