import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  background: transparent;
  border-radius: 0;
  overflow: visible;
`;

export const Image = styled.img`
  width: 90%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Title = styled.h3`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const LoadMoreButton = styled.button`
  margin: 40px 0 0 100px;
  display: block;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  background: #ffb36c;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  transition: 0.2s;
`;

export const TitleSection = styled.h2`
  margin-left: 100px;
  font-size: 20px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;
