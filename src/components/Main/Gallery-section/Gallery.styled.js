import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background: white;
`;

export const Title = styled.h2`
  margin-left: 100px;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
`;

export const Image = styled.img`
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${({ $active }) => ($active ? "330px" : "160px")};
  height: ${({ $active }) => ($active ? "180px" : "130px")};
  opacity: ${({ $active }) => ($active ? "1" : "0.5")};
  margin-left: ${({ $active }) => ($active ? "-10px" : "0")};
  margin-right: ${({ $active }) => ($active ? "-10px" : "0")};
  z-index: ${({ $active }) => ($active ? "2" : "1")};
  &:hover {
    opacity: 0.8;
  }
`;
